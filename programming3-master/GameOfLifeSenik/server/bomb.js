let LivingCreature = require("./livingCreature")

module.exports =  class Bomb extends LivingCreature{
    eat() {
        let foods = this.chooseCell(1, 2, 3, 4, 5, 6)
        if (foods) {     
            let newX = food[0]
            let newY = food[1]
    
            matrix[newY][newX] = 0
            matrix[this.y][this.x] = 0
    
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
    
                    break;
                }
            }
    
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

            for (let i in personArr) {
                if (newX == personArr[i].x && newY == personArr[i].y) {
                    personArr.splice(i, 1)
    
                    break;
                }
            }

            for (let i in virusArr) {
                if (newX == virusArr[i].x && newY == virusArr[i].y) {
                    virusArr.splice(i, 1)
    
                    break;
                }
            }

            for (let i in zombieArr) {
                if (newX == zombieArr[i].x && newY == zombieArr[i].y) {
                    zombieArr.splice(i, 1)
    
                    break;
                }
            }
    
            this.x = newX
            this.y = newY

    
        } 
    
    }
}

