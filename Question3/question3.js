function sumOfRange(start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
}
function calculate(start, end, shouldDouble) {
  let res = sumOfRange(start, end);
  if (shouldDouble) {
    res *= 2;
  }
  return res;
}
