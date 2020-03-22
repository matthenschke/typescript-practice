// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum
enum Role {
  ADMIN = 5, // 0
  READ_ONLY = "READ_ONLY", // 1
  AUTHOR = 1 // 2
}
const person = {
  name: "Matt",
  age: 21,
  hobbies: ["coding", "sports"], // regular arr
  role: Role.AUTHOR
};

// person.role.push("admin"); // push is allowed for tuples
let favoriteActivities: string[];
favoriteActivities = ["sports", "cooking"];
console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("author");
}
