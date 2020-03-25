// typescript can infer return types of functions

// this is how you tell what return type you want func to return
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void function just like in Java, C++, they return undefined, void does not have return statement
// if you declare func undefined, have empty return statement
function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 10));

let combinedValues: (a: number, b: number) => number;
combinedValues = add; // ptr to function

console.log(combinedValues(14, 14));

console.log(
  addAndHandle(10, 20, num => {
    console.log(num);
  })
);
