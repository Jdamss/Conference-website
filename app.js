const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
 });

 //javascript for responsive navigation sidebar menu
 var menu = document.querySelector('.menu');
 var menuBtn = document.querySelector('.menu-btn');
 var closeBtn = document.querySelector('.close-btn');

 menuBtn.addEventListener("click",() => {
  menu.classList.add('active');
 });

 closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
 });