var X;//��Ӧx����
var Y;//��Ӧy����
var num = 500;//���ɵ�Բ����
var r = 10;//���ɵ�Բ�뾶
var dt = 1;//ʱ��΢�֣��൱��draw��������ִ��һ��ʱ����˶���
var t = 0;//��ǰʱ��
//strokeWeight()���ʴ�С
//background(,)������ɫ�����Դﵽ��ӰЧ��
//line(,,,,)����
//translate(,)
//rotate()������
//radians()�Ƕ�ת����
//scale(,)
//push()��pop()֮����translate,rotate,scaleӰ��(Ҳд������)������֮��Ĳ���Ӱ��
//millis()��ȡ������
function setup() {
  // put setup code here
    createCanvas(500, 500);//��������
    //�������x,y����
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
    drawF1(0.03, 0.07, dt);//ǰ�����Ǻ���ϵ��
    pop();
}
function mousePressed() {
    //��갴�����������������
    for (var i = 0; i < num; i++) {
        X[i] = random(0, 500);
        Y[i] = random(0, 500);
    }
}

function drawF1(a1, a2, dt) {
    //��΢�ַ���
    //d2x/dt2=sin(a1*y*t)*(1/a1*y)
    //d2y/dt2=cos(a2*x*t)*(1/a2*x)
    //�Ϸ���ʽ��2�����Ͻ�ָ��
    //����һ�κ�
    //dx/dt=cos(a1*y*t)
    //dy/dt=-sin(a2*x*t)
    setColor();
    drawpicture();
    update1(a1,a2,dt);
}
function setColor() {
    fill(255);//�����ɫΪ��ɫ
    stroke(165, 135, 255, 60);//�߿���ɫ����ɫ,������͸����
}
function drawpicture() {
    //��Բ
    for (var i = 0; i < num; i++) {
        ellipse(X[i], Y[i], r, r);
    }
}
function update1(a1, a2, dt) {
    //����΢�ַ��̹�ʽ��������
    t += 0.001;
    for (var i = 0; i < num; i++) {
        X[i] += cos(a1 * Y[i] * t) * dt;
        Y[i] += -sin(a2 * X[i] * t) * dt;
    }
}