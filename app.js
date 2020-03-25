var userInput; // unknown cant be assignable to type string or other types
var userName;
userName = "hi";
userInput = 1;
userInput = "h111";
if (typeof userInput === "string") {
    userName = userInput;
}
// never type - it is a type that functions can return
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
var result = generateError("An error occurred", 500);
console.log(result);
