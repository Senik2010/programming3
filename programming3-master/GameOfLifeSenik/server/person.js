let LivingCreature = require("./livingCreature")

module.exports = class Person extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 10;


    }



    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char1, char2) {
        this.getNewCoordinates();
        return super.chooseCell(char1, char2)
    }


    mull() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;

            let pers = new Person(newX, newY);
            personArr.push(pers);
        }
    }

    eat() {
        let foods = this.chooseCell(2, 3)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy += 2
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0



            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)

                    break;
                }
            }
            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if (this.energy >= 15) {
                this.mull()
            }

        } else {
            this.move()
        }

    }

    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy <= 0) {
                this.die()
            }
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in personArr) {
            if (this.x == personArr[i].x && this.y == personArr[i].y) {
                personArr.splice(i, 1);
                break;
            }
        }
    }
}