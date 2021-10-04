const btn   =   document.querySelector(".btn");
const video =   document.querySelector(".background-video");
const font  =   document.querySelector(".fas");
const preloader =   document.querySelector(".preloader");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play();
        font.classList.add("fa-pause");
        font.classList.remove("fa-play");
    }else{
        btn.classList.add("pause");
        video.pause();
        font.classList.add("fa-play");
        font.classList.remove("fa-pause");
    }

});

window.addEventListener("load",()=>{
    preloader.style.zIndex  =   "-2";
});