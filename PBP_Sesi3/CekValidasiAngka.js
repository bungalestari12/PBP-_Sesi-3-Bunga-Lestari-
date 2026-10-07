const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Masukan Nilai : ", function (inputNilai) {
    let nilai = parseInt(inputNilai);
    if (isNaN(nilai) || nilai<0 || nilai>100) {
       console.log("Input tidak valid. Silakan masukkan angka.");
    } else if (nilai >= 85)  {
        console.log("Grade A");
    } else if (nilai >= 70)  {
        console.log("Grade B");
    } else if (nilai >= 55)  {
        console.log("Grade C");
    } else if (nilai >= 40)  {
        console.log("Grade D");
    } else {
        console.log("Grade E");
    }
});