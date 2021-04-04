canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x1=10;
car_y1=10;
car_x2=10;
car_y2=490;
background_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSzJPU4ehpG5mygPPnNiHlekXkNeem-GL1jw&usqp=CAU";
car_img1="Car1.jpg";
car_img2="Car2.jpg";
function add()  { 
  background_imgTag=new Image();
  background_imgTag.onload=uploadBackground;
  background_imgTag.src=background_img;
  car_imgTag1=new Image();
  car_imgTag1.onload=uploadCar1;
  car_imgTag1.src=car_img1;
  car_imgTag2=new Image();
  car_imgTag2.onload=uploadCar2;
  car_imgTag2.src=car_img2;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car_imgTag1,car_x1,car_y1,car_width,car_height);
}
function uploadCar2() {
    ctx.drawImage(car_imgTag2,car_x2,car_y2,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '68') {
        right2();
        console.log("right2");
    }
    if(keyPressed == '65') {
        left2();
        console.log("left2");
    }
    if(keyPressed == '37') {
        left1();
        console.log("left1");
    }
    if(keyPressed == '39') {
        right1();
        console.log("right1");
    }
}
function left2() {
    if(car_x2 >=0)
{
    car_x2 -=10;
    uploadBackground();
    uploadCar2();
    uploadCar1();
}
}
function right2() {
    if(car_x2 >=0)
{
    car_x2 +=10;
    uploadBackground();
    uploadCar2();
    uploadCar1();
}
}
function left1() {
    if(car_x1 >=0)
{
    car_x1 -=10;
    uploadBackground();
    uploadCar1();
    uploadCar2();
}
}
function right1() {
    if(car_x1 <=700) {
        car_x1 +=10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
