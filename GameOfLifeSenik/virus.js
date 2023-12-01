class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];

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

    chooseCell(char, char2) {
        this.getNewCoordinates();
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char || matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }

            }
        }

        return found;
    }

    mull() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 6
           
        }
    }


    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)

        if (food) {
            this.energy += 5
            let newX = food[0]
            let newY = food[1]

            matrix[this.y][this.x] = 6

            let zomblo = new Zombie(newX,newY)
            zombieArr.push(zomblo)

            for (let i in personArray) {
                if (newX == personArray[i].x && newY == personArray[i].y) {
                    personArray.splice(i, 1)

                    break;
                }
            }

            if (this.energy >= 65) {
                this.mull()
            }

        }

    }

   
}