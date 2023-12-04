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

let matrix = matrixGenerator(40, 30, 12, 10, 10, 15);
let side = 20;

let grassArr = [];
let grassEaterArr = [];
let predatorArray = [];
let personArray = [];
let virusArr = [];
let zombieArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);


            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat);
            } else if (matrix[y][x] == 4) {
                let pers = new Person(x, y);
                personArray.push(pers);
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArray.push(pred);
            } else if (matrix[y][x] == 5) {
                let vir = new Virus(x, y);
                virusArr.push(vir);
            } else if (matrix[y][x] == 6) {
                let zombie = new Zombie(x, y)
                zombieArr.push(zombie);
            }

        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
                text("🍀", x * side, y * side, side, side)
                textSize(side)
            } else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
                text("🐮", x * side, y * side, side, side)
                textSize(side)


            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
                text("🐆", x * side, y * side, side, side)
                textSize(side)
            } else if (matrix[y][x] == 4) {
                fill('#eab676');
                rect(x * side, y * side, side, side);
                text("👶", x * side, y * side, side, side)
                textSize(side)

            } else if (matrix[y][x] == 5) {
                fill('magenta');
                rect(x * side, y * side, side, side);
                text("🦠", x * side, y * side, side, side)
                textSize(side)

            } else if (matrix[y][x] == 6) {
                fill('blue');
                rect(x * side, y * side, side, side);
                text("🧟‍♀️", x * side, y * side, side, side)
                textSize(side)
            } else {
                fill('gray')
                rect(x * side, y * side, side, side);

            }

        }

    }

    for (let i in grassArr) {

        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {

        grassEaterArr[i].eat()
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
}