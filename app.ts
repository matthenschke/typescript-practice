let userInput: unknown; // unknown cant be assignable to type string or other types
let userName: string;
userName = "hi";
userInput = 1;
userInput = "h111";

if (typeof userInput === "string") {
  userName = userInput;
}

// never type - it is a type that functions can return
// functions that throw something return never as nothing is ever returned
function generateError(message: string, code: number) {
  throw {
    message: message,
    errorCode: code
  };
}

generateError("An error occurred", 500);
