fetch("/user/students")
    .then(response => response.json())
    .then(function(students) {
        console.log(students);

        var select = document.getElementById("studentsBox");
        for(index in students) {
            select.options[select.options.length] = new Option(students[index].username, index);
        }
    });