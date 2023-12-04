class Zombie extends LivingCreature {
   

    constructor(x, y) {
        super(x,y)
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

 





    move() {
        let emptyCells = this.chooseCell(0,1)
        let newCell = random(emptyCells)
       
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY


        }

    }

}