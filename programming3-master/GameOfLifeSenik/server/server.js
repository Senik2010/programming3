let express = require("express");
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));


app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, personCount, virusCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }

    }



    for (let j = 0; j < grassCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }

    for (let j = 0; j < grassEaterCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let j = 0; j < predatorCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }

    for (let j = 0; j < personCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }

    for (let j = 0; j < virusCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }

    return matrix;
}
matrix = matrixGenerator(40, 30, 12, 10, 10, 15);
grassArr = [];
grassEaterArr = [];
predatorArray = [];
personArray = [];
virusArr = [];
zombieArr = [];



io.sockets.emit('send matrix', matrix)



Grass = require("./Grass")
GrassEater = require("./GrassEater")
Person = require("./person")
Predator = require("./predator")
Virus = require("./virus")
Zombie = require("./zombie")



function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater)
            } else if (matrix[y][x] == 4) {
                let pers = new Person(x, y, 3);
                personArray.push(pers);
            } 
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y, 4);
                predatorArray.push(pred);
            }
             else if (matrix[y][x] == 5) {
                let vir = new Virus(x, y, 5);
                virusArr.push(vir);
            }
             else if (matrix[y][x] == 6) {
                let zombie = new Zombie(x, y, 6)
                zombieArr.push(zombie);
            }
            }
        
        }
    }
    
    io.sockets.emit('send matrix', matrix)



    function game() {
        for (var i in grassArr) {
            grassArr[i].mul()
        }
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
        for (let i in predatorArray) {
            predatorArray[i].eat()
        }
    
        for (let i in personArray) {
            personArray[i].eat()
        }
        for (let i in virusArr) {
            virusArr[i].eat()
        }
    
        for (let i in zombieArr) {
            zombieArr[i].move()
        }
        io.sockets.emit("send matrix", matrix);
    }


    setInterval(game, 1000)


    io.on('connection', function () {
        createObject(matrix)
    })

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



// var fs = require('fs');
// function main(){
// fs.writeFile("hello.txt", "Hello world\n", function(err){
// console.log("fs.writeFile ended");
// });
// console.log("fs.writeFile");
// }
// main();



// N1

// var express = require("express");
// var app = express();

// app.use(express.static("your_project_folder_name"));

// app.get("/", function(req, res) {
//     res.redirect("http://google.com");
// });

// app.listen(3000, function() {
//     console.log("Example is running on port 3000");
// });


// N2

// var express = require("express");
// var app = express();

// app.use(express.static("your_project_folder_name"));

// app.get("/", function(req, res, search) {
//     search = "tumo"
//     res.redirect("http://google.com/search?q=" + search);
// });

// app.listen(3000, function() {
//     console.log("Example is running on port 3000");
// });