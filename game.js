let cansvas = document.getElementById('game');
let context = cansvas.getContext('2d');
let x = 100;
let y = 100;
let radius = 20;
let dx = 5, dy = 5;
let padd = {
    x: 0,
    y: cansvas.height - 20,
    width: 100,
    height: 20,
    moveLeft: false,
    moveRight: false,
    speed: 20
};
let gameOver = false;
let score = 0;

// tạo trái banh
function drawball() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}
// tạo thanh ngang
function Paddle() {
    context.beginPath();
    context.fillStyle = 'black';
    context.fillRect(padd.x, padd.y, padd.width, padd.height);
    context.closePath();
}
// tao sore
function number() {
    context.beginPath();
    context.font = '30px Arial'
    context.fillText('score: ' + score, 10, 30)
    context.fillStyle = 'yellow'
    context.closePath();
}
//tạo tọa độ(bóng di chuyển)
function coordinates() {
    x += dx;
    y += dy;
}
// xữ lý va chạm
function collisionhandling() {
    if (x < radius || x > cansvas.width - radius) {
        dx = -dx
    }
    if (y < radius) {
        dy = -dy
    }
}
// sự kiện bàn phím
document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.keyCode == 37) {
        padd.moveLeft = true;
    } else if (event.keyCode == 39) {
        padd.moveRight = true;
    }
    document.addEventListener('keyup', function (event) {
        console.log(event);
        if (event.keyCode == 37) {
            padd.moveLeft = false;
        } else if (event.keyCode == 39) {
            padd.moveRight = false;
        }
    })
})
// di chuyển thanh ngang
function moveBar() {
    if (padd.moveLeft) {
        padd.x -= padd.speed
    } else if (padd.moveRight) {
        padd.x += padd.speed
    }
    if (padd.x < 0) {
        padd.x = 0
    } else if (padd.x >= cansvas.width - padd.width) {
        padd.x = cansvas.width - padd.width
    }
}
// xữ lý va chạm bóng và thang ngang và tính điểm
function ball_bar() {
    if (x + radius >= padd.x && x + radius <= padd.x + padd.width && y + radius >= cansvas.height - padd.height) {
        dy = -dy;
        score++;
    }
}
// tổng hợp
function GameBall() {
    if (!gameOver) {
        context.clearRect(0, 0, cansvas.width, cansvas.height)
        drawball();
        Paddle();
        number();
        coordinates();
        collisionhandling();
        moveBar();
        ball_bar();
        if (y > cansvas.height - radius) {     //bóng đúng điều kiện nên dừng lại, không gọi vào hàm requestAni...nữa
            gameOver = true;
        }
        requestAnimationFrame(GameBall); //hàm chuyển động
    } else {
        alert('GAME OVER!');
    }
}
GameBall();