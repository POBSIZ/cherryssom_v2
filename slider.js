const SHOWING_CLASS = "show";
const firstSlide = document.querySelector(".ban_img:first-child");
var slide_T = 2000;
var banner_num = 1;
var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
var nextSlide = document.querySelector(".ban_img:nth-child("+ (banner_num+1) +")");
var prevSlide = document.querySelector(".ban_img:nth-child("+ (banner_num-1) +")");
var slide_num = document.querySelector("#fore_num");

const Slide = () => {
    currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    nextSlide = document.querySelector(".ban_img:nth-child("+ (banner_num+1) +")");
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
            banner_num += 1;
            slide_num.innerHTML = `<span>${banner_num}</span>`;
        } else {
            banner_num = 1;
            slide_num.innerHTML = `<span>${banner_num}</span>`;
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
};
var autoSlide = setInterval(Slide, slide_T);

function s_next(){
    currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    if(banner_num > 3){
        banner_num = 1;
        slide_num.innerHTML = `<span>${banner_num}</span>`;
        document.querySelector(".ban_img:nth-child(1)").classList.add(SHOWING_CLASS);
    }else{
        nextSlide = document.querySelector(".ban_img:nth-child("+ (banner_num+1) +")");
        nextSlide.classList.add(SHOWING_CLASS);
        banner_num += 1;
        slide_num.innerHTML = `<span>${banner_num}</span>`;
    }
}
function s_prev(){
    currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    currentSlide.classList.remove(SHOWING_CLASS);
    if(banner_num < 2){
        banner_num = 4;
        slide_num.innerHTML = `<span>${banner_num}</span>`;
        document.querySelector(".ban_img:nth-child(4)").classList.add(SHOWING_CLASS);
    }else{
        prevSlide = document.querySelector(".ban_img:nth-child("+ (banner_num-1) +")");
        prevSlide.classList.add(SHOWING_CLASS);
        banner_num -= 1;
        slide_num.innerHTML = `<span>${banner_num}</span>`;
    }
}

var s_playB =  document.getElementById("s_playB");
var s_stopB =  document.getElementById("s_stopB");
function s_stop(){
    clearInterval(autoSlide); 
    s_stopB.style.display="none";
    s_playB.style.display="inline-block";
    console.log("stop");
}
function s_play(){
    autoSlide = setInterval(Slide, slide_T); 
    s_playB.style.display="none";
    s_stopB.style.display="inline-block";
    console.log("play");
}