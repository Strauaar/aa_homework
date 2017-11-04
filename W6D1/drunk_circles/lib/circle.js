const Circle =  function (centerX, centerY, radius, color) {
  this.centerX = centerX;
  this.centerY = centerY;
  this.radius = radius;
  this.color = color;
};

Circle.randomCircle = function (maxX, maxY, numCircles) {
  return new Circle(
    maxX * Math.random(),
    maxY * Math.random(),
    Circle.radius(maxX, maxY, numCircles),
    Circle.randomColor()
  );
};

const HEX_DIGITS = "0123456789ABCDEF";

Circle.randomColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += HEX_DIGITS[Math.floor((Math.random() * 16))];
  }

  return color;
};

Circle.radius = function (maxX, maxY, numCircles) {
  let targetCircleArea = (maxX * maxY) / numCircles;
  let targetRadius = Math.sqrt(targetCircleArea / Math.PI);
  return 2 * targetRadius;
};

Circle.prototype.moveRandom = function (maxX, maxY, mousePosX, mousePosY) {
  if (mousePosX === undefined) {
    mousePosX = 0;
    mousePosY = 0;
  }
  let distanceX = this.centerX - mousePosX;
  let distanceY = this.centerY - mousePosY;
  let signX = distanceX < 0 ? -1 : 1;
  let signY = distanceY < 0 ? -1 : 1;

  let distance = Math.pow(distanceX,2) + Math.pow(distanceY,2);

  let dx = (Math.random() + 2)/(distance);
  let dy = (Math.random() + 2)/(distance);
  let gConstant = (Math.random()*2 + 500);

  this.centerX = ((Math.random()*2 + this.centerX) + (dx * signX * gConstant)) % maxX;
  this.centerY = ((Math.random()*2 + this.centerY) + (dy * signY * gConstant)) % maxY;
};

Circle.prototype.render = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

module.exports = Circle;
