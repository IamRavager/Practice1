const course = "CSE8603";
let week = 4;
const pi = 3.14159;
const ok = true;
const empty = null;
let notSet;
console.log(typeof course, typeof week, typeof pi, typeof ok, typeof empty, typeof notSet);
const score = 95;
const passed = score >= 50 && score <= 100;
console.log("passed?", passed);
if (score >= 90) console.log('A');
else if (score >= 75) console.log("B");
else console.log("Keep practicing, you can do anything!");
const nums = [1, 2, 3, 4, 5];
let sum = 0;

for (const n of nums) sum += n;
console.log("sum", sum);

function logLine(msg) {
    const el = document.getElementById("out");
    el.textContent += msg + "\n";
    console.log(msg);
}

function letterFor(score) {
    if (score >= 95) return "A";
    if (score >= 90) return "A-";
    if (score >= 85) return "B+";
    if (score >= 80) return "B";
    if (score >= 75) return "B-";
    if (score >= 70) return "C+";
    if (score >= 65) return "C";
    if (score >= 60) return "C-";
    if (score >= 50) return "D";
    return "F";
}

logLine("7 times table:");
for (let i = 1; i <= 10; i++) logLine(`7 x ${i} = ${7 * i}`);
logLine("letter for 83: " + letterFor(83));


