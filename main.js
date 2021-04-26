window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

const targetElement = document.querySelectorAll(".works-container");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll", function(){
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
    targetElement[i].classList.add("show")
    }
  }
})

const targetElements = document.querySelectorAll(".skill-container");
// console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll", function(){
  for (let i = 0; i < targetElements.length; i++) {
    const getElementDistance = targetElements[i].
    getBoundingClientRect().top + targetElements[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
    targetElements[i].classList.add("show")
    }
  }
})

const targetElementx = document.querySelectorAll(".works");
// console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll", function(){
  for (let i = 0; i < targetElementx.length; i++) {
    const getElementDistance = targetElementx[i].
    getBoundingClientRect().top + targetElementx[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
    targetElementx[i].classList.add("show")
    }
  }
})
