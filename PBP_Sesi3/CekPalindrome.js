const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question ("Masukan masukan kata/ kalimat palindrome : ", function (input) {

   for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            console.log("Bukan Palindrome");
            rl.close();
            return;
        }
    }
    console.log("Palindrome");
    rl.close();
});