var person = {
    name: "Matt",
    age: 21,
    hobbies: ["coding", "sports"],
    role: [2, "author"] // tuple
};
person.role.push("admin");
var favoriteActivities;
favoriteActivities = ["sports", "cooking"];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
