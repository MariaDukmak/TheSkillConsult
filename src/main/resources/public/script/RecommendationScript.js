//document.getElementById('cursusReconmantion').innerHTML = 'A The world around you. About world citizenship\u202f(OA-MINBILDUN1-20)'
// function UpdateReccomandation(student) {
//     var Course = "";
//     switch (student){
//         case 'Jan':
//             Course = 'A The world around you. About world citizenship\u202f(OA-MINBILDUN1-20)'
//             break;
//         case 'Piet':
//             Course = 'A The world around you. About world citizenship\u202f(OA-MINBILDUN1-20)'
//             break;
//         case 'Klaas':
//             Course = 'Honours - Mindfulness voor professionals\u202f(OHON-MINDFUL-18)'
//             break;
//
//     }
//     document.getElementById('cursusReconmantion').innerHTML = Course
//
// }


fetch("/recommendation/name", {
    method: 'POST',
    body: JSON.stringify({"userId": 1 }),
    headers: new Headers({'content-type': 'application/json'})})
    .then(function(response) {
        return response.text()})
        .then(function(data) {
            console.log(data); // this will be a string
         //console.log(response.body);
        document.getElementById('cursusReconmantion').innerHTML = data;
});
