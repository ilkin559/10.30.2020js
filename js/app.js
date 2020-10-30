var img=[
    "photo/01.jpg",
    "photo/02.jpg",
    "photo/03.jpg",
    "photo/04.jpg"
]
var sliderImg=document.querySelector(".slider img")
sliderImg.src=img[0]
var nextbtn=document.querySelector(".next")
var prevbtn=document.querySelector(".prev")
var c=0;

nextbtn.onclick=function(){
    c++;
    if(c>=img.length){
        c=0;
    }
    sliderImg.src=img[c]
}
prevbtn.onclick=function(){
    c--;
    if(c==-1){
        c=img.length-1
    }
    sliderImg.src=img[c]
}