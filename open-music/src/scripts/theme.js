
export function criaEvento(){

const button = document.querySelector(".header_theme-btn");
const divButton = document.querySelector(".tema-button");
const bodyDark = document.querySelector("body");
const logoDark = document.querySelector(".header-logo");
const genreDark = document.querySelector(".title-genre");
const buttonDark = document.querySelector(".button-filter");
const titlePriceDark = document.querySelector(".title-price");
const h1Dark = document.querySelector(".album-title");


button.addEventListener("click", function (){
       button.classList.toggle("header_theme-btn--sun");
       divButton.classList.toggle("tema-button-dark");
       bodyDark.classList.toggle("body-dark-mode");
       logoDark.classList.toggle("header-logo-dark-mode");
       genreDark.classList.toggle("title-genre-dark-mode");
       buttonDark.classList.toggle("button-filter-dark-mode");
       titlePriceDark.classList.toggle("title-price-dark-mode");
       h1Dark.classList.toggle("album-title-dark-mode");

});
};


