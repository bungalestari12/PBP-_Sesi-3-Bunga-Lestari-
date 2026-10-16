const studentData = [
    {
        name: "Bunga Lestari",
        java_programing_score: 80,
        python_programing_score: 100,
        javascript_programing_score: 80,
    },
    {
        name: "Sagitarius",
        java_programing_score: 50,
        python_programing_score: 95,
        javascript_programing_score: 70,
    },
    {
        name: "Tupperware",
        java_programing_score: 70,
        python_programing_score: 75,
        javascript_programing_score: 60,
    }
];

// Mengakses data objek literal dalam array
for(let i in studentData){
    for (let j in studentData[i]){
        console.log(j + " : " + studentData[i][j]);
    }
}