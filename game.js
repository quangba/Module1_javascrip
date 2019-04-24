let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let x = 50
let y = 50
let dx = 20, dy = 20
let radius = 20;
let padddle = {
    width: 900,
    height: 20,
    x: 0,
    y: canvas.height - 20,
    speed: 35,
    ismoveleft: false,
    ismoveright: false,
}
let isGameOver = false;
document.addEventListener('keyup', function (event) {
    console.log('key up')
    console.log(event)
    if (event.keyCode == 37) {
        padddle.ismoveleft = false
    } else if (event.keyCode == 39) {
        padddle.ismoveright = false
    }
})
document.addEventListener('keydown', function (event) {
    console.log('key down')
    console.log(event)
    if (event.keyCode == 37) {
        padddle.ismoveleft = true
    } else if (event.keyCode == 39) {
        padddle.ismoveright = true
    }
})

function thanhngang() {
    context.beginPath();
    context.fillRect(padddle.x, padddle.y, padddle.width, padddle.height)
    context.fill();
    context.closePath();
}
function dawball() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fillStyle = 'red'
    context.fill();
    context.closePath();
}
// setInterval(function(){
//     hinhtron.clearRect(0 ,0 ,canvas.width,canvas.height)
//     dawball()
//     x += 2
//     y += 2
// },50)
function xulyvacham() {
    if (x < 0 || x > canvas.width - radius) {
        dx = -dx
    }
    if (y < 0) {
        dy = -dy
    }
}
function toado() {
    x += dx;
    y += dy;
}
function diemcham() {
    if (x + radius >= padddle.x && x + radius <= padddle.x + padddle.width && y + radius >= canvas.height - padddle.height) {
        dy = -dy; 
    }
}
function chuyendong() {
    if (!isGameOver) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        dawball();
        xulyvacham();
        toado()
        thanhngang();
        diemcham();

        if (padddle.ismoveleft) {
            padddle.x -= padddle.speed;
        } else if (padddle.ismoveright) {
            padddle.x += padddle.speed;
        }
        if (padddle.x < 0) {
            padddle.x = 0;
        }
        else if (padddle.x > canvas.width - padddle.width) {
            padddle.x = canvas.width - padddle.width
        }
        if (y > canvas.height - radius) {
            isGameOver = true;
        }
        requestAnimationFrame(chuyendong);
    } else {
        alert('GAME OVER')
    }
}



chuyendong();