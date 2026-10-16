let studentsScore = [
  { name: "Andi", score: 90 },
  { name: "Rudi", score: 80 },
  { name: "Dira", score: 100 },
];

studentsScore.sort((a, b) => b.score - a.score);

for (let i = 0; i < studentsScore.length; i++) {
  console.log("Peringkat " + (i + 1));
  console.log("Nama  : " + studentsScore[i].name);
  console.log("Nilai : " + studentsScore[i].score);
}