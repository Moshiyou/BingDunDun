function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);//��������
    // ������������
    textFont("���Ĳ���");
}
function draw() {
    // put drawing code here
    background(255);//������ɫ
    push();
    drawBDD(windowWidth / 2, windowHeight/2);
    pop();
}
function mousePressed() {
    //��갴��
}

function drawBDD(x, y) {
    fill(255);//����ɫ
    stroke(150, 150, 150, 100);//��ɫ���
    arc(x, y - 30, 500, 350, -PI * 3.1 / 5.0, -PI * 1.9 / 5.0);//�Ϸ���

    //���϶���
    push();
    rotate(PI / 8);
    translate(1, - 282);
    arc(x - 80, y - 180, 55, 55, PI * 3 / 4.0, PI * 7 / 4.0);
    pop();
    //���϶���
    push();
    rotate(-PI / 8);
    translate(-123,  310);
    arc(x + 80, y - 180, 55, 55, -PI * 3 / 4.0, PI / 4.0);
    pop();
    //����
    push();
    translate(x-11, y-7);
    rotate(PI / 30);
    arc(0, 0, 350, 450, PI * 4.8 / 7.0, PI * 9 / 7.0);
    pop();
    //�Ұ��
    push();
    translate(x +10, y+3);
    arc(0, 0, 350, 450, PI * 11.7 / 7.0, PI * 16 / 7.0);
    pop();



    strokeWeight(3);

    stroke(255, 255, 156);//��ɫ���
    ellipse(x, y - 50, 250, 230);

    stroke(255, 82, 122);//��ɫ���
    ellipse(x, y - 50, 240, 220);

    stroke(82, 192, 255);//��ɫ���
    ellipse(x, y - 50, 230, 210);

    stroke(156, 255, 176);//��ɫ���
    ellipse(x, y - 50, 220, 200);

    //��ɫ��Բ����
    //��
    strokeWeight(1);
    stroke(0);
    fill(0);
    push();
    translate(x-50, y-60);
    rotate(PI / 6);
    ellipse(0, 0, 55, 80);
    pop();
    //��
    push();
    translate(x + 50, y - 60);
    rotate(-PI / 6);
    ellipse(0, 0, 55, 80);
    pop();

    fill(255);//����ɫ
    stroke(150, 150, 150, 100);//��ɫ���
    //���߽����
    push();
    translate(x - 200, y + 247);
    arc(0, 0, 180, 250, PI * 11.7 / 7.0, PI * 14 / 7.0);
    pop();

    arc(x - 47, y + 240, 130, 60, 2.7 * PI / 6, 5.8 * PI / 6);//����·���

    arc(x - 47, y + 220, 65, 100, -0.5 * PI / 6, 2.8 * PI / 6);//����ҷ���

    //�Ұ�߽����
    push();
    translate(x + 214, y + 231);
    arc(0, 0, 190, 250, -PI * 7.5 / 7.0, -PI * 5.3 / 7.0);
    pop();

    arc(x + 56, y + 247, 130, 60, 0.2 * PI / 6, 3.3 * PI / 6);//�ҽ��·���

    arc(x + 56, y + 227, 65, 100, 3.0 * PI / 6, -5.2 * PI / 6);//�ҽ��ҷ���

    arc(x + 5, y + 200, 80, 30, 1.0 * PI / 6, 5.0 * PI / 6);//�·���

    //�������
    line(x - 260, y + 5, x - 180, y - 31);
    line(x - 230, y + 80, x - 180, y + 58);

    push();
    translate(x - 242, y + 41);
    rotate(-PI / 7);
    arc(0, 0, 80, 81, PI / 2, PI * 3 / 2);
    pop();


    //�������
    line(x + 220, y - 70, x + 180, y - 45);
    line(x + 251, y + 9, x + 180, y + 50);

    push();
    translate(x + 235, y - 30);
    rotate(-PI / 8);
    arc(0, 0, 80, 85, -PI / 2, PI / 2);
    pop();
    //��ͺ�
    fill(0);
    stroke(0);
    ellipse(x, y - 20, 30, 25);
    //���Ϻڶ���
    ellipse(x - 95, y - 192, 30, 30);
    //���Ϻڶ���
    ellipse(x + 92, y - 190, 30, 30);

    //��ͷ�
    fill(255,135,173);
    stroke(255, 135, 173);
    ellipse(x, y - 20, 25, 20);

    //��ɫ�۾�
    fill(255);
    stroke(255);
    ellipse(x-40, y-65, 30, 30);
    ellipse(x + 40, y - 65, 30, 30);

    //���Ϻڶ�����ס
    push();
    translate(x - 88, y - 178);
    rotate(PI * 1.4 / 4);
    ellipse(0, 0, 30, 60);
    pop();
    //���Ϻڶ�����ס
    push();
    translate(x + 88, y - 178);
    rotate(-PI * 1.4 / 4);
    ellipse(0, 0, 30, 60);
    pop();
    //��ɫ�۾�
    fill(0);
    stroke(0);
    ellipse(x - 40, y - 65, 25, 25);
    ellipse(x + 40, y - 65, 25, 25);
    //��ɫ�۾�
    fill(89, 140, 114);
    stroke(89, 140, 114);
    ellipse(x - 40, y - 65, 20, 20 * sin(0.007 * millis()));
    ellipse(x + 40, y - 65, 20, 20 * sin(0.007 * millis()));
    //��ɫ�۾�
    fill(0);
    stroke(0);
    ellipse(x - 40, y - 65, 17, 17 * sin(0.007 * millis()));
    ellipse(x + 40, y - 65, 17, 17 * sin(0.007 * millis()));
    //��ɫ�۾��߹�
    fill(255);
    stroke(255);
    ellipse(x - 38, y - 65, 5, 5 * sin(0.007 * millis()));
    ellipse(x + 38, y - 65, 5, 5 * sin(0.007 * millis()));
    //����
    fill(0);
    stroke(0);
    ellipse(x, y-50, 17, 10);

    //������
    rect(x - 90, y + 160, 60, 80);
    ellipse(x - 60, y + 235, 62, 50);
    push();
    translate(x - 60, y + 235);
    rotate(PI / 8);
    ellipse(0, 0, 62, 50);
    pop();

    //������
    rect(x + 40, y + 160, 60, 80);
    ellipse(x + 70, y + 235, 62, 50);
    push();
    translate(x + 70, y + 235);
    rotate(-PI / 8);
    ellipse(0, 0, 62, 50);
    pop();

    //����
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

    //����
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
    //����
    fill(255);
    stroke(255);
    ellipse(x, y + 155, 220, 100);
    //����
    ellipse(x-162, y + 12, 60, 120);
    ellipse(x + 162, y + 2, 60, 120);


    strokeWeight(0.7);
    fill(0);
    stroke(0);
    // ���������С
    textSize(10);
    text("BEIJING 2022", x - 30, y + 137);


    //�����廷
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