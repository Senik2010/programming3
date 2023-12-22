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
matrix = matrixGenerator(30, 30, 12, 10, 10, 15);
grassArr = [];
grassEaterArr = [];
predatorArr = [];
personArr = [];
virusArr = [];
zombieArr = [];
bombArr = [];



io.sockets.emit('send matrix', matrix)



Grass = require("./grass")
GrassEater = require("./grassEater")
Person = require("./person")
Predator = require("./predator")
Virus = require("./virus")
Zombie = require("./zombie")
Bomb = require("./bomb")



function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grEater = new GrassEater(x, y);
                grassEaterArr.push(grEater)
            } else if (matrix[y][x] == 4) {
                let pers = new Person(x, y,);
                personArr.push(pers);
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            }
            else if (matrix[y][x] == 5) {
                let vir = new Virus(x, y);
                virusArr.push(vir);
            }
            else if (matrix[y][x] == 6) {
                let zombie = new Zombie(x, y)
                zombieArr.push(zombie);
            }else if(matrix[y][x] == 7){
                let bomb = new Bomb(x, y);
                bombArr.push(bomb);
            }

        }

    }

    io.sockets.emit('send matrix', matrix)

}




function game() {
    console.log("bomb arrrray====>>>>",bombArr);
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in personArr) {
        personArr[i].eat()
    }
    for (let i in virusArr) {
        virusArr[i].eat()
    }

    for (let i in zombieArr) {
        zombieArr[i].move()
    }
    for (let i in bombArr) {
        bombArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix);
}


setInterval(game, 1000)

function bomb(bombCount) {
    console.log("=====fffff======",bombCount);
    for (let j = 0; j < bombCount; j++) {

        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
            io.sockets.emit("send matrix", matrix);
        }
    }
}


io.on('connection', function (socket) {
    createObject(matrix);
    socket.on("bomb", bomb)

})


let statistic = {
    grass: 0,
    grassEater: 0,
    predator: 0,
    person: 0,
    virus: 0,
    zombie: 0,

}

// setInterval(function () {
//     statistic.grass = grassArr.length;
//     statistic.grassEater = grassEaterArr.length;
//     statistic.person = personArr.length
//     statistic.predator = predatorArr.length
//     statistic.virus = virusArr.length
//     statistic.zombie = zombieArr.length

//     fs.writeFile("statistics.json", JSON.stringify(statistic), () => {
//         console.log("Writed statistic to file !!!");
//     })


// }, 6000)



