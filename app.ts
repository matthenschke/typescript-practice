const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Matt",
  age: 21,
  hobbies: ["coding", "sports"], // regular arr
  role: [2, "author"] // tuple
};

person.role.push("admin"); // push is allowed for tuples
let favoriteActivities: string[];
favoriteActivities = ["sports", "cooking"];
console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
