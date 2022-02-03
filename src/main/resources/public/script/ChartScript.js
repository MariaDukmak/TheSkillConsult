fetch("/progress/results", {
    method: 'POST',
    body: JSON.stringify({"userId": 0 }),
    headers: new Headers({'content-type': 'application/json'})})
    .then(function(response) {
        return response.text()})
    .then(function(data) {
        console.log(data); // this will be a string
        var Jdata = JSON.parse(data);
        console.log(Jdata)
        delete Jdata[0].userId;
        delete Jdata[0].id;
        delete Jdata[1].userId;
        delete Jdata[1].id;
        console.log(Jdata[0]['socialInitiative'])

        ctx = document.getElementById("myChart");

        labels = [
            'openness',
            'cultural empathy',
            'openmindness',
            'adaptability',
            'flexibility',
            'emotional stability',
            'social initiative'
        ]

        data = {
            labels,
            datasets: [
                {
                    data: [
                        Jdata[0]['openness'],
                        Jdata[0]['culturalEmpathy'],
                        Jdata[0]['openmindness'],
                        Jdata[0]['adaptability'],
                        Jdata[0]['flexibility'],
                        Jdata[0]['emotionalStability'],
                        Jdata[0]['socialInitiative']
                    ],
                    label: "First measurement",
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    data: [
                        Jdata[1]['openness'],
                        Jdata[1]['culturalEmpathy'],
                        Jdata[1]['openmindness'],
                        Jdata[1]['adaptability'],
                        Jdata[1]['flexibility'],
                        Jdata[1]['emotionalStability'],
                        Jdata[1]['socialInitiative']
                    ],
                    label: "Second measurement",
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }
            ]
        };
        config = {
            type: 'radar',
            data: data,

        }
        myChart = new Chart(ctx, config);
    });

function UpdateChart() {
    let student = document.getElementById("studentsBox");
    let SelectedStudent = student.options[student.selectedIndex].value;

    var userId = parseInt(SelectedStudent);

    console.log(userId);

    document.querySelector(".myChart").innerHTML = '<canvas id="myChart"></canvas>';

    UpdateRecommendation(userId);

    fetch("/progress/results", {
        method: 'POST',
        body: JSON.stringify({"userId": userId }),
        headers: new Headers({'content-type': 'application/json'})})
        .then(function(response) {
            return response.text()})
        .then(function(data) {
            console.log(data); // this will be a string
            var Jdata = JSON.parse(data);
            console.log(Jdata)
            delete Jdata[0].userId;
            delete Jdata[0].id;
            delete Jdata[1].userId;
            delete Jdata[1].id;
            console.log(Jdata[0]['socialInitiative'])

            ctx = document.getElementById("myChart");

            labels = [
                'openness',
                'cultural empathy',
                'openmindness',
                'adaptability',
                'flexibility',
                'emotional stability',
                'social initiative'
            ]

            data = {
                labels,
                datasets: [
                    {
                        data: [
                            Jdata[0]['openness'],
                            Jdata[0]['culturalEmpathy'],
                            Jdata[0]['openmindness'],
                            Jdata[0]['adaptability'],
                            Jdata[0]['flexibility'],
                            Jdata[0]['emotionalStability'],
                            Jdata[0]['socialInitiative']
                        ],
                        label: "First measurement",
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    }, {
                        data: [
                            Jdata[1]['openness'],
                            Jdata[1]['culturalEmpathy'],
                            Jdata[1]['openmindness'],
                            Jdata[1]['adaptability'],
                            Jdata[1]['flexibility'],
                            Jdata[1]['emotionalStability'],
                            Jdata[1]['socialInitiative']
                        ],
                        label: "Second measurement",
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                ]
            };
            config = {
                type: 'radar',
                data: data,

            }
            myChart = new Chart(ctx, config);
        });


    // UpdateReccomandation(SelectedStudent);
    //
    // document.querySelector(".myChart").innerHTML = '<canvas id="myChart"></canvas>';
    //
    // ctx = document.getElementById("myChart");
    //
    // labels = [
    //     'openness',
    //     'cultural empathy',
    //     'openmindness',
    //     'adaptability',
    //     'flexibility',
    //     'emotional stability',
    //     'social initiative'
    // ]

    // data = {
    //     labels,
    //     datasets: [
    //         {
    //             data: [
    //                 5.926,
    //                 5.926,
    //                 5.151,
    //                 3.773,
    //                 2.664,
    //                 3.65,
    //                 5.146],
    //             label: "eerste meeting",
    //             backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             pointBackgroundColor: 'rgb(255, 99, 132)',
    //             pointBorderColor: '#fff',
    //             pointHoverBackgroundColor: '#fff',
    //             pointHoverBorderColor: 'rgb(255, 99, 132)'
    //         }, {
    //             data: [
    //                 5.879,
    //                 5.437,
    //                 6.275,
    //                 3.324,
    //                 2.266,
    //                 4.174,
    //                 4.921],
    //             label: "tweede meeting",
    //             backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //             borderColor: 'rgb(54, 162, 235)',
    //             pointBackgroundColor: 'rgb(54, 162, 235)',
    //             pointBorderColor: '#fff',
    //             pointHoverBackgroundColor: '#fff',
    //             pointHoverBorderColor: 'rgb(54, 162, 235)'
    //         }
    //     ]
    // };
    // config = {
    //     type: 'radar',
    //     data: data,
    //
    // }
    // myChart = new Chart(ctx, config);

    // switch (SelectedStudent) {
    //     case 'Jane Doe':
    //         data = {
    //             labels,
    //             datasets: [
    //                 {
    //                     data: [
    //                         5.926,
    //                         5.926,
    //                         5.151,
    //                         3.773,
    //                         2.664,
    //                         3.65,
    //                         5.146],
    //                     label: "First measurement",
    //                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //                     borderColor: 'rgb(255, 99, 132)',
    //                     pointBackgroundColor: 'rgb(255, 99, 132)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(255, 99, 132)'
    //                 }, {
    //                     data: [
    //                         5.879,
    //                         5.437,
    //                         6.275,
    //                         3.324,
    //                         2.266,
    //                         4.174,
    //                         4.921],
    //                     label: "Second measurement",
    //                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //                     borderColor: 'rgb(54, 162, 235)',
    //                     pointBackgroundColor: 'rgb(54, 162, 235)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(54, 162, 235)'
    //                 }
    //             ]
    //         };
    //         config = {
    //             type: 'radar',
    //             data: data,
    //
    //         }
    //         myChart = new Chart(ctx, config);
    //     case 'Jan Kaas':
    //         data = {
    //             labels,
    //             datasets: [
    //                 {
    //                     data: [
    //                         5.383,
    //                         5.44,
    //                         6.257,
    //                         3.093,
    //                         3.073,
    //                         4.336,
    //                         6.236],
    //                     label: "First measurement",
    //                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //                     borderColor: 'rgb(255, 99, 132)',
    //                     pointBackgroundColor: 'rgb(255, 99, 132)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(255, 99, 132)'
    //                 }, {
    //                     data: [
    //                         5.224,
    //                         5.819,
    //                         5.308,
    //                         3.452,
    //                         3.751,
    //                         4.056,
    //                         4.523],
    //                     label: "Second measurement",
    //                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //                     borderColor: 'rgb(54, 162, 235)',
    //                     pointBackgroundColor: 'rgb(54, 162, 235)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(54, 162, 235)'
    //                 }
    //             ]
    //         };
    //         config = {
    //             type: 'radar',
    //             data: data,
    //
    //         }
    //
    //         myChart = new Chart(ctx, config);
    //     case 'Jaap Doe':
    //         data = {
    //             labels,
    //             datasets: [
    //                 {
    //                     data: [
    //                         6.085,
    //                         5.662,
    //                         6.188,
    //                         3.954,
    //                         2.532,
    //                         3.766,
    //                         4.711],
    //                     label: "First measurement",
    //                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //                     borderColor: 'rgb(255, 99, 132)',
    //                     pointBackgroundColor: 'rgb(255, 99, 132)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(255, 99, 132)'
    //                 }, {
    //                     data: [
    //                         6.107,
    //                         6.836,
    //                         4.712,
    //                         3.8,
    //                         3.287,
    //                         3.261,
    //                         5.269],
    //                     label: "Second measurement",
    //                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //                     borderColor: 'rgb(54, 162, 235)',
    //                     pointBackgroundColor: 'rgb(54, 162, 235)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(54, 162, 235)'
    //                 }
    //             ]
    //         };
    //         config = {
    //             type: 'radar',
    //             data: data,
    //
    //         }
    //         myChart = new Chart(ctx, config);
    //     case 'Ellen Steven':
    //         data = {
    //             labels,
    //             datasets: [
    //                 {
    //                     data: [
    //                         5.93,
    //                         6.322,
    //                         5.43,
    //                         4.451,
    //                         2.855,
    //                         4.623,
    //                         4.496],
    //                     label: "First measurement",
    //                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //                     borderColor: 'rgb(255, 99, 132)',
    //                     pointBackgroundColor: 'rgb(255, 99, 132)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(255, 99, 132)'
    //                 }, {
    //                     data: [
    //                         6.235,
    //                         6.625,
    //                         5.199,
    //                         3.759,
    //                         3.539,
    //                         4.021,
    //                         5.162],
    //                     label: "Second measurement",
    //                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //                     borderColor: 'rgb(54, 162, 235)',
    //                     pointBackgroundColor: 'rgb(54, 162, 235)',
    //                     pointBorderColor: '#fff',
    //                     pointHoverBackgroundColor: '#fff',
    //                     pointHoverBorderColor: 'rgb(54, 162, 235)'
    //                 }
    //             ]
    //         };
    //         config = {
    //             type: 'radar',
    //             data: data,
    //
    //         }
    //         myChart = new Chart(ctx, config);
    // }

}



// fetch("/progress", { method: 'POST', body: SelectedStudent })
//     .then(response => response.json())
//     .then(function(myJson) {
//         console.log(myJson.Progress);
//
//         const data = {
//             labels,
//             datasets: [
//                 {
//                     data: [
//                         myJson.Progress[0].openness,
//                         myJson.Progress[0].cultural_empathy,
//                         myJson.Progress[0].openmindness,
//                         myJson.Progress[0].adaptability,
//                         myJson.Progress[0].flexibility,
//                         myJson.Progress[0].emotional_stability,
//                         myJson.Progress[0].social_initiative],
//                     label: "eerste meeting",
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgb(255, 99, 132)',
//                     pointBackgroundColor: 'rgb(255, 99, 132)',
//                     pointBorderColor: '#fff',
//                     pointHoverBackgroundColor: '#fff',
//                     pointHoverBorderColor: 'rgb(255, 99, 132)'
//                 }, {
//                     data: [
//                         myJson.Progress[1].openness,
//                         myJson.Progress[1].cultural_empathy,
//                         myJson.Progress[1].openmindness,
//                         myJson.Progress[1].adaptability,
//                         myJson.Progress[1].flexibility,
//                         myJson.Progress[1].emotional_stability,
//                         myJson.Progress[1].social_initiative],
//                     label: "tweede meeting",
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     borderColor: 'rgb(54, 162, 235)',
//                     pointBackgroundColor: 'rgb(54, 162, 235)',
//                     pointBorderColor: '#fff',
//                     pointHoverBackgroundColor: '#fff',
//                     pointHoverBorderColor: 'rgb(54, 162, 235)'
//                 }
//
//             ]
//         };
//     });