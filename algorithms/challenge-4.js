function calculateGrade(marks) {
  let i;
  let count = 0;
  let sum = 0;
  let average;

  for (i = 0; i < marks.length; i++) {
    sum += marks[i];
    count++;
  }
  average = sum / count;

  if (average > 1 && average < 50) {
    return "F";
  } else if (average < 60) {
    return "E";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else if (average <= 100) {
    return "A";
  }
}
module.exports = calculateGrade;
