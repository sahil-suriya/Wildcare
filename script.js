const images = [
    "./img/leapord.png",
    "./img/bear.png",
    "./img/tiger.png",
    "./img/bull.png"
];

let currentIndex = 0;
const imageElements = document.querySelectorAll(".Animal"); 

function changeImage() {
    imageElements.forEach((img) => {
        img.style.opacity = 0;
    });

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElements.forEach((img) => {
            img.src = images[currentIndex];
            img.style.opacity = 1;
        });
    }, 1000);
}

setInterval(changeImage, 3000);

  
  let menuItems=document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight="0px";
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px"){
                    MenuItems.style.maxHeight="200px";
                }
                else{
                    MenuItems.style.maxHeight="0px";
                }
            }
            let LoginForm=document.getElementById("LoginForm");
            let RegForm=document.getElementById("RegForm");
            let Indicator=document.getElementById("Indicator");
            
            function register(){
                RegForm.style.transform="translateX(0px)";
                LoginForm.style.transform="translateX(0px)";
                Indicator.style.transform="translateX(100px)"
            }
            function login(){
                RegForm.style.transform="translateX(300px)";
                LoginForm.style.transform="translateX(300px)";
                Indicator.style.transform="translateX(0px)";
            }