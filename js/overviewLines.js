function interactiveLines(){
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

'floor|random|round|abs|sqrt|PI|atan2|sin|cos|pow|max|min'
  .split('|')
  .forEach(function(p) { window[p] = Math[p]; });

var TAU = PI*2;

function r(n) { return random()*n; }
function rrng(lo, hi) { return lo + r(hi-lo); }
function rint(lo, hi) { return lo + floor(r(hi - lo + 1)); }
function choose() { return arguments[rint(0, arguments.length-1)]; }

/*---------------------------------------------------------------------------*/

var W, H, frame, t0, time;
var DPR = devicePixelRatio;

function resize() {
  var w = innerWidth;
  var h = 570;
  
  canvas.style.width = w+'px';
  canvas.style.height = h+'px';
  
  W = canvas.width = w * DPR;
  H = canvas.height = h * DPR;
}

function loop(t) {
  frame = requestAnimationFrame(loop);
  draw();
  time++;
}

function pause() {
  cancelAnimationFrame(frame);
  frame = frame ? null : requestAnimationFrame(loop);
}

function reset() {
  cancelAnimationFrame(frame);
  resize();
  ctx.clearRect(0, 0, W, H);
  init();
  time = 0;
  frame = requestAnimationFrame(loop);
}

/*---------------------------------------------------------------------------*/
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.add = function(p) {
  return new Point(this.x + p.x, this.y + p.y);
};

Point.prototype.subtract = function(p) {
  return new Point(this.x - p.x, this.y - p.y);
};

Point.prototype.jitter = function(v) {
  this.x += (r(2) - 1) * v;
  this.y += (r(2) - 1) * v;
  return this;
};

Point.prototype.averageWith = function(other, a, b) {
  return new Point(a*this.x + b*other.x,
                   a*this.y + b*other.y);
};


function Line(x, y) {
  this.prev = new Point(x, y - 2*DPR);
  this.curr = new Point(x, y);
}

Line.prototype.extend = function() {
  var curr = this.curr.add(this.curr.subtract(this.prev)).jitter(0.2*DPR);
  this.prev = this.curr;
  this.curr = curr;
  this.draw();
};

Line.prototype.extendNear = function(other) {
  var c1 = this.curr.add(other.curr.subtract(other.prev)).jitter(0.2*DPR);
  var c2 = this.curr.add(this.curr.subtract(this.prev)).jitter(0.2*DPR);
  this.prev = this.curr;
  this.curr = c1.averageWith(c2, 0.8, 0.2);
  this.draw();
};
  
Line.prototype.draw = function() {
  ctx.beginPath();
  ctx.moveTo(this.prev.x, this.prev.y);
  ctx.lineTo(this.curr.x, this.curr.y);
  ctx.stroke();
};

/*---------------------------------------------------------------------------*/

var lines;
var n = 0;

function init() {
  var y = n;
  lines = [];
  ctx.strokeStyle = '#AE0074';
  for (var x = n; x < W - n; x += DPR) 
    lines.push(new Line(x, y));
}

function draw() {
  var prev, curr;
  lines[0].extend();
  for (var i = 1; i < lines.length; i++) {
    prev = lines[i-1];
    curr = lines[i];
    curr.extendNear(prev);
  }
  
  if (lines[0].curr.y >= H - n) pause();
}

/*---------------------------------------------------------------------------*/

document.onclick = pause;
document.ondblclick = reset;

reset();
}