(function () {
  const sliderBall = document.querySelector('.slider-ball');
  const container = document.querySelector('.container');
  function toggle() {
    if (container.classList.contains('active')) {
      container.classList.remove('active');
      container.classList.add('inactive');
    } else {
      container.classList.add('active');
      container.classList.remove('inactive');
    }

  }

  sliderBall.addEventListener('click', toggle);
})();