// type aliases
type Combinable = number | string;
type Combinable2 = Combinable | boolean; // can have another type alias in union type
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable | string, // union types allow parameters to be diff types
  input2: number | string,
  resultConversion: ConversionDescriptor // literal type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; // +string_var converts to number
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");

console.log(combinedStringAges);

const combinedNames = combine("Jeff", "Matt", "as-text");

console.log(combinedNames);
