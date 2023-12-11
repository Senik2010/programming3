let LivingCreature = require("./livingCreature")

module.export =  class Grass extends LivingCreature{
  




    mul() {
        this.multiple++;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);
        if (newCell && this.multiple >= 3) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let gr = new Grass(newX, newY);
            grassArr.push(gr);
            this.multiple = 0;
        }





    }
}