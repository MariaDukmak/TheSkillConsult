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

function UpdateRecommendation(Id) {
    fetch("/recommendation/name", {
        method: 'POST',
        body: JSON.stringify({"userId": Id }),
        headers: new Headers({'content-type': 'application/json'})})
        .then(function(response) {
            return response.text()})
        .then(function(data) {
            console.log(data); // this will be a string
            //console.log(response.body);
            document.getElementById('cursusReconmantion').innerHTML = data;
        });
}