function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    console.log(resultPhrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}

const number1 = 2.8;
const number2 = 5;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
