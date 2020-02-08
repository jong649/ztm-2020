// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let exclaimUsers = [];
array.forEach(val => {
  exclaimUsers.push(val.username + "!");
});
console.log(exclaimUsers);

//Create an array using map that has all the usernames with a "? to each of the usernames
const questionUsers = array.map(val => val.username + "?");
console.log(questionUsers);

//Filter the array to only include users who are on team: red
const filterRed = array.filter(val => val.team === "red");
console.log(filterRed);

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, val) => {
  return acc + val.score;
}, 0);
console.log(totalScore);

// (1), what is the value of i?
// i represents the current index of the num
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});
alert(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const exclaimAllItems = array.map(val => {
  val.items = val.items.map(item => {
    return item + "!";
  });
  return val;
});
console.log(exclaimAllItems);
