package nl.hu.consultant.security.application;

import nl.hu.consultant.security.domain.Role;
import nl.hu.consultant.security.domain.User;
import nl.hu.consultant.security.persistence.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(String username, String password, String firstName, String lastName) {
        String encodedPassword = this.passwordEncoder.encode(password);

        User user = new User(username, encodedPassword, firstName, lastName);

        this.userRepository.save(user);
    }

    public boolean edit(String username, String newPassword){
        if (isUserExisting(username)) {
            String encodedPassword = this.passwordEncoder.encode(newPassword);
            User user = loadUserByUsername(username);
            user.changePassword(encodedPassword);

            this.userRepository.save(user);

            return true;
        }

        return false;
    }

    private boolean isUserExisting(String username){
        return userRepository.findByUsername(username).isPresent();
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }

    public List<User> loadAllUsersByRole(Role role) {
        return this.userRepository.findByUserRole(role);
    }

}
