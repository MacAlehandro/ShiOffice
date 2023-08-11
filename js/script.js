// let icons = document.querySelectorAll('.footer__social');
// icons.forEach(icon => {
//    icon.addEventListener('mouseenter', () => {
//       icon.style.cssText = `
//          background-color : #f53838;
//       `;
//    });
//    icon.addEventListener('mouseleave', () => {
//       icon.style.backgroundColor = 'white';
//    });
// })

document.addEventListener("DOMContentLoaded", function () {
   const scrollButtons = document.querySelectorAll('.header__link')

   scrollButtons.forEach((scrollButton, num) => {
      scrollButton.addEventListener("click", function () {
         if (num == 0) {
            smoothScroll(".stats", 1000); // 1000 миллисекунд (1 секунда) на прокрутку
         } else if (num == 1) {
            smoothScroll(".offers", 1000); // 1000 миллисекунд (1 секунда) на прокрутку
         } else if (num == 2) {
            smoothScroll(".comments", 1000); // 1000 миллисекунд (1 секунда) на прокрутку
         }
      });
   })
});

function smoothScroll(target, duration) {
   let targetElement = document.querySelector(target);
   let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
   let startPosition = window.scrollY;
   let distance = targetPosition - startPosition;
   let startTime = null;

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);

      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
   }

   requestAnimationFrame(animation);
}