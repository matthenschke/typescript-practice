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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1] = "AUTHOR"; // 2
})(Role || (Role = {}));
var person = {
    name: "Matt",
    age: 21,
    hobbies: ["coding", "sports"],
    role: Role.AUTHOR
};
// person.role.push("admin"); // push is allowed for tuples
var favoriteActivities;
favoriteActivities = ["sports", "cooking"];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("author");
}
