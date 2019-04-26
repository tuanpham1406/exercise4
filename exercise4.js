let canvas = document.getElementById('square');
let ctx = canvas.getContext('2d');
function Square(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

let square = new Square(10, 10, 200, 100, '#000000');

function paint() {
  ctx.beginPath();
  ctx.rect(square.x, square.y, square.width, square.height);
  ctx.fillStyle = square.color;
  ctx.fill();
}
paint();