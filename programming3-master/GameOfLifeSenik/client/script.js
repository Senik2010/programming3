
let socket = io()
let weather = ''
let winterButton = document.getElementById('winter')
let springButton = document.getElementById('spring')
let summerButton = document.getElementById('summer')
let autumnButton = document.getElementById('autumn')



winterButton.addEventListener("click", function () {
    weather = "winter"
})

springButton.addEventListener("click", function () {
    weather = "spring"
})

summerButton.addEventListener("click", function () {
    weather = "summer"
})

autumnButton.addEventListener("click", function () {
    weather = "autumn"
})


let side = 30;

function setup() {
    frameRate(5);
    createCanvas(40 * side, 40 * side);
}

function nkarel(matrix) {
    console.log(matrix);

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
                    rect(x * side, y * side, side, side);
                    text("☘️", x * side, y * side, side, side);
                    textSize(side)
                if (weather == "winter") {
                    fill('white')
                    rect(x * side, y * side, side, side);
                    text("❄️", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "spring") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("🌸", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "summer") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("🍀", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "autumn") {
                    fill('orange');
                    rect(x * side, y * side, side, side);
                    text("🍁", x * side, y * side, side, side);
                    textSize(side)
                }


            } else if (matrix[y][x] == 2) {
                if (weather == "winter") {
                    fill('white')
                    rect(x * side, y * side, side, side);
                    text("🐰", x * side, y * side, side, side);
                    textSize(side)
                }
                else if (weather == "spring") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("🐰", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "summer") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("🐰", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "autumn") {
                    fill('orange');
                    rect(x * side, y * side, side, side);
                    text("🐰", x * side, y * side, side, side);
                    textSize(side)
                }
                fill('yellow');
                rect(x * side, y * side, side, side);
                text("🐰", x * side, y * side, side, side);
                textSize(side)


            } else if (matrix[y][x] == 3) {

                fill('red');
                rect(x * side, y * side, side, side);
                text("🐯", x * side, y * side, side, side);
                textSize(side)
           } 


            else if (matrix[y][x] == 4) {
                if (weather == "winter") {
                    fill('white')
                    rect(x * side, y * side, side, side);
                    text("🎅", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "spring") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("👨‍🌾", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "summer") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("👱‍♂️", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "autumn") {
                    fill('orange');
                    rect(x * side, y * side, side, side);
                    text("🧔", x * side, y * side, side, side);
                    textSize(side)
                }


                fill("#eab676")
                rect(x * side, y * side, side, side);
                text("👱‍♂️", x * side, y * side, side, side);
                textSize(side)
            } 
            
            
            else if (matrix[y][x] == 5) {
                fill('pink');
                rect(x * side, y * side, side, side);
                text("🦠", x * side, y * side, side, side);
                textSize(side)

            } else if (matrix[y][x] == 6) {
                fill('blue');
                rect(x * side, y * side, side, side);
                text("🧟‍♂️", x * side, y * side, side, side);
                textSize(side)
            } else {
                fill('gray');
                rect(x * side, y * side, side, side);

            }

        }

    }

}

setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)



