var X;//对应x坐标
var Y;//对应y坐标
var num = 500;//生成的圆数量
var r = 10;//生成的圆半径
var dt = 1;//时间微分，相当于draw（）函数执行一次时间过了多少
var t = 0;//当前时间
//strokeWeight()画笔大小
//background(,)背景颜色，可以达到残影效果
//line(,,,,)画线
//translate(,)
//rotate()弧度制
//radians()角度转弧度
//scale(,)
//push()和pop()之间受translate,rotate,scale影响(也写在里面)，这样之外的不受影响
//millis()获取毫秒数
function setup() {
  // put setup code here
    createCanvas(500, 500);//创建画布
    //随机生成x,y坐标
    X = new Array();
    Y = new Array();
    for (var i = 0; i < num; i++) {
        X[i] = random(0, 500);
        Y[i] = random(0, 500);
    }
}
function draw() {
    // put drawing code here
    push();
    drawF1(0.03, 0.07, dt);//前两个是函数系数
    pop();
}
function mousePressed() {
    //鼠标按下重新随机生成坐标
    for (var i = 0; i < num; i++) {
        X[i] = random(0, 500);
        Y[i] = random(0, 500);
    }
}

function drawF1(a1, a2, dt) {
    //画微分方程
    //d2x/dt2=sin(a1*y*t)*(1/a1*y)
    //d2y/dt2=cos(a2*x*t)*(1/a2*x)
    //上方公式的2是右上角指数
    //积分一次后
    //dx/dt=cos(a1*y*t)
    //dy/dt=-sin(a2*x*t)
    setColor();
    drawpicture();
    update1(a1,a2,dt);
}
function setColor() {
    fill(255);//填充颜色为白色
    stroke(165, 135, 255, 60);//边框颜色是紫色,降低了透明度
}
function drawpicture() {
    //画圆
    for (var i = 0; i < num; i++) {
        ellipse(X[i], Y[i], r, r);
    }
}
function update1(a1, a2, dt) {
    //根据微分方程公式更新坐标
    t += 0.001;
    for (var i = 0; i < num; i++) {
        X[i] += cos(a1 * Y[i] * t) * dt;
        Y[i] += -sin(a2 * X[i] * t) * dt;
    }
}