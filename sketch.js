function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);//创建画布
    // 设置字体名字
    textFont("华文彩云");
}
function draw() {
    // put drawing code here
    background(255);//背景颜色
    push();
    drawBDD(windowWidth / 2, windowHeight/2);
    pop();
}
function mousePressed() {
    //鼠标按下
}

function drawBDD(x, y) {
    fill(255);//填充白色
    stroke(150, 150, 150, 100);//灰色描边
    arc(x, y - 30, 500, 350, -PI * 3.1 / 5.0, -PI * 1.9 / 5.0);//上方线

    //左上耳朵
    push();
    rotate(PI / 8);
    translate(1, - 282);
    arc(x - 80, y - 180, 55, 55, PI * 3 / 4.0, PI * 7 / 4.0);
    pop();
    //右上耳朵
    push();
    rotate(-PI / 8);
    translate(-123,  310);
    arc(x + 80, y - 180, 55, 55, -PI * 3 / 4.0, PI / 4.0);
    pop();
    //左半边
    push();
    translate(x-11, y-7);
    rotate(PI / 30);
    arc(0, 0, 350, 450, PI * 4.8 / 7.0, PI * 9 / 7.0);
    pop();
    //右半边
    push();
    translate(x +10, y+3);
    arc(0, 0, 350, 450, PI * 11.7 / 7.0, PI * 16 / 7.0);
    pop();



    strokeWeight(3);

    stroke(255, 255, 156);//黄色描边
    ellipse(x, y - 50, 250, 230);

    stroke(255, 82, 122);//红色描边
    ellipse(x, y - 50, 240, 220);

    stroke(82, 192, 255);//蓝色描边
    ellipse(x, y - 50, 230, 210);

    stroke(156, 255, 176);//绿色描边
    ellipse(x, y - 50, 220, 200);

    //黑色椭圆斑纹
    //左
    strokeWeight(1);
    stroke(0);
    fill(0);
    push();
    translate(x-50, y-60);
    rotate(PI / 6);
    ellipse(0, 0, 55, 80);
    pop();
    //右
    push();
    translate(x + 50, y - 60);
    rotate(-PI / 6);
    ellipse(0, 0, 55, 80);
    pop();

    fill(255);//填充白色
    stroke(150, 150, 150, 100);//灰色描边
    //左半边脚描边
    push();
    translate(x - 200, y + 247);
    arc(0, 0, 180, 250, PI * 11.7 / 7.0, PI * 14 / 7.0);
    pop();

    arc(x - 47, y + 240, 130, 60, 2.7 * PI / 6, 5.8 * PI / 6);//左脚下方线

    arc(x - 47, y + 220, 65, 100, -0.5 * PI / 6, 2.8 * PI / 6);//左脚右方线

    //右半边脚描边
    push();
    translate(x + 214, y + 231);
    arc(0, 0, 190, 250, -PI * 7.5 / 7.0, -PI * 5.3 / 7.0);
    pop();

    arc(x + 56, y + 247, 130, 60, 0.2 * PI / 6, 3.3 * PI / 6);//右脚下方线

    arc(x + 56, y + 227, 65, 100, 3.0 * PI / 6, -5.2 * PI / 6);//右脚右方线

    arc(x + 5, y + 200, 80, 30, 1.0 * PI / 6, 5.0 * PI / 6);//下方线

    //左手描边
    line(x - 260, y + 5, x - 180, y - 31);
    line(x - 230, y + 80, x - 180, y + 58);

    push();
    translate(x - 242, y + 41);
    rotate(-PI / 7);
    arc(0, 0, 80, 81, PI / 2, PI * 3 / 2);
    pop();


    //右手描边
    line(x + 220, y - 70, x + 180, y - 45);
    line(x + 251, y + 9, x + 180, y + 50);

    push();
    translate(x + 235, y - 30);
    rotate(-PI / 8);
    arc(0, 0, 80, 85, -PI / 2, PI / 2);
    pop();
    //嘴巴黑
    fill(0);
    stroke(0);
    ellipse(x, y - 20, 30, 25);
    //左上黑耳朵
    ellipse(x - 95, y - 192, 30, 30);
    //右上黑耳朵
    ellipse(x + 92, y - 190, 30, 30);

    //嘴巴粉
    fill(255,135,173);
    stroke(255, 135, 173);
    ellipse(x, y - 20, 25, 20);

    //白色眼睛
    fill(255);
    stroke(255);
    ellipse(x-40, y-65, 30, 30);
    ellipse(x + 40, y - 65, 30, 30);

    //左上黑耳朵遮住
    push();
    translate(x - 88, y - 178);
    rotate(PI * 1.4 / 4);
    ellipse(0, 0, 30, 60);
    pop();
    //右上黑耳朵遮住
    push();
    translate(x + 88, y - 178);
    rotate(-PI * 1.4 / 4);
    ellipse(0, 0, 30, 60);
    pop();
    //黑色眼睛
    fill(0);
    stroke(0);
    ellipse(x - 40, y - 65, 25, 25);
    ellipse(x + 40, y - 65, 25, 25);
    //绿色眼睛
    fill(89, 140, 114);
    stroke(89, 140, 114);
    ellipse(x - 40, y - 65, 20, 20 * sin(0.007 * millis()));
    ellipse(x + 40, y - 65, 20, 20 * sin(0.007 * millis()));
    //黑色眼睛
    fill(0);
    stroke(0);
    ellipse(x - 40, y - 65, 17, 17 * sin(0.007 * millis()));
    ellipse(x + 40, y - 65, 17, 17 * sin(0.007 * millis()));
    //白色眼睛高光
    fill(255);
    stroke(255);
    ellipse(x - 38, y - 65, 5, 5 * sin(0.007 * millis()));
    ellipse(x + 38, y - 65, 5, 5 * sin(0.007 * millis()));
    //鼻子
    fill(0);
    stroke(0);
    ellipse(x, y-50, 17, 10);

    //左下腿
    rect(x - 90, y + 160, 60, 80);
    ellipse(x - 60, y + 235, 62, 50);
    push();
    translate(x - 60, y + 235);
    rotate(PI / 8);
    ellipse(0, 0, 62, 50);
    pop();

    //右下腿
    rect(x + 40, y + 160, 60, 80);
    ellipse(x + 70, y + 235, 62, 50);
    push();
    translate(x + 70, y + 235);
    rotate(-PI / 8);
    ellipse(0, 0, 62, 50);
    pop();

    //左手
    push();
    translate(x - 250, y + 10);
    rotate(-PI / 7);
    rect(0, 0, 80, 60);
    pop();
    push();
    translate(x - 242, y + 40);
    rotate(-PI / 7);
    ellipse(0, 0, 50, 62);
    pop();

    //右手
    push();
    translate(x + 155, y - 17);
    rotate(-PI / 6);
    rect(0, 0, 80, 60);
    pop();
    push();
    translate(x + 237, y - 30);
    rotate(-PI / 7);
    ellipse(0, 0, 50, 62);
    pop();

    fill(255, 92, 92);
    stroke(255, 92, 92);
    push();
    translate(x + 230, y - 30);
    rotate(PI / 7);
    ellipse(0, 0, 18, 28);
    pop();
    push();
    translate(x + 235, y - 24);
    rotate(PI * 3 / 7);
    ellipse(0, 0, 18, 28);
    pop();
    //遮腿
    fill(255);
    stroke(255);
    ellipse(x, y + 155, 220, 100);
    //遮手
    ellipse(x-162, y + 12, 60, 120);
    ellipse(x + 162, y + 2, 60, 120);


    strokeWeight(0.7);
    fill(0);
    stroke(0);
    // 设置字体大小
    textSize(10);
    text("BEIJING 2022", x - 30, y + 137);


    //奥运五环
    fill(0,0,0,0);
    stroke(0, 0, 255);
    strokeWeight(3);
    ellipse(x - 15, y + 160, 20, 20);

    stroke(0);
    ellipse(x + 0, y + 160, 20, 20);

    stroke(255, 0, 0);
    ellipse(x + 15, y + 160, 20, 20);

    stroke(255, 255, 0);
    ellipse(x - 8, y + 170, 20, 20);

    stroke(0, 255, 0);
    ellipse(x + 8, y + 170, 20, 20);
}