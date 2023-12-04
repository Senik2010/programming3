// var express = require("express");
// var app = express();

// app.use(express.static("."));

// app.get("/", function(req, res){
// res.redirect("index.html");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// let Square = require("./square")

// let obj = new Square(4)
// console.log(obj.tviQarakusi());

// let fs = require('fs');

// function main(){
// let file = "hello.txt";

// fs.appendFileSync("hello.txt", "Hello world/n");
// }
// main();



var fs = require('fs');
function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}
main();