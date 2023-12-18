
let socket = io()
let weather = ''
let winterButton = document.getElementById('winter')
let springButton = document.getElementById('spring')
let summerButton = document.getElementById('summer')
let autumnButton = document.getElementById('autumn')
let bombButton = document.getElementById('bomb')


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

bombButton.addEventListener("click", function () {
    socket.emit("bomb")
})

let side = 20;

function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
}

function nkarel(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {

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
                }else{
                    fill('green')
                    rect(x * side, y * side, side, side);
                    text("☘️", x * side, y * side, side, side);
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
            } else if (matrix[y][x] == 4) {
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
                    fill('#eab676');
                    rect(x * side, y * side, side, side);
                    text("👱‍♂️", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "autumn") {
                    fill('orange');
                    rect(x * side, y * side, side, side);
                    text("🧔", x * side, y * side, side, side);
                    textSize(side)
                }else {
                    fill("#eab676")
                    rect(x * side, y * side, side, side);
                    text("👱‍♂️", x * side, y * side, side, side);
                    textSize(side)
                }

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
            } else if(matrix[y][x] == 7){
                fill('#3D0C02');
                rect(x * side, y * side, side, side);
                text("💣", x * side, y * side, side, side);
                textSize(side)
            }
            else {
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



