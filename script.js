const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');
const container = document.querySelector('.container');
const topSide = document.querySelector('.top-side');
const bottomSide = document.querySelector('.bottom-side');
const slidesAmount = bottomSide.querySelectorAll('div').length;

topSide.style.zIndex = "4"
topSide.style.left = `-${(slidesAmount - 1) * 100}vw`
console.log(slidesAmount);
let activeSlideIndex = 0;

rightButton.addEventListener('click', () => {
  changeSlide('right')
})
leftButton.addEventListener('click', () => {
  changeSlide('left')
})

function changeSlide(direction) {
  if (direction === 'left') {
    activeSlideIndex--;
    console.log(activeSlideIndex);
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesAmount - 1;
      console.log("а теперь ", activeSlideIndex);

    }
  }
  else if (direction === 'right') {
    activeSlideIndex++;
    console.log(activeSlideIndex);
    if (activeSlideIndex === slidesAmount) {
      activeSlideIndex = 0;
    }
  }
  bottomSide.style.transform = `translateX(-${activeSlideIndex * 100}vw)`
  topSide.style.transform = `translateX(${(activeSlideIndex) * 100}vw)`
}
