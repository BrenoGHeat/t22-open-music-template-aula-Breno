
export function criaEvento(){

const button = document.querySelector(".header_theme-btn");
const divButton = document.querySelector(".tema-button");
const bodyDark = document.querySelector("body");
const logoDark = document.querySelector(".header-logo");
const genreDark = document.querySelector(".title-genre");
const buttonDark = document.querySelector(".button-filter");
const titlePriceDark = document.querySelector(".title-price");
const h1Dark = document.querySelector(".album-title");
const priceDark = document.querySelector(".price-album");
const titleAlbumDark = document.querySelector(".title-style-album");
const albumStyleDarkMode = document.querySelector(".list-album-style");



button.addEventListener("click", function (){
       button.classList.toggle("header_theme-btn--sun");
       bodyDark.classList.toggle("dark-mode");
       
                     if(bodyDark.classList.contains("dark-mode")){
                            localStorage.setItem("@openMusic:theme", "dark" )
                     } else {
                            localStorage.removeItem("@openMusic:theme");
                     }

});


       function verificarModo(){
              const dark = localStorage.getItem("@openMusic:theme"); 

              if(dark){
                     button.classList.toggle("header_theme-btn--sun");
                     bodyDark.classList.toggle("dark-mode");
              }

       };

       verificarModo();

};






