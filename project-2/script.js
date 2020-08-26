(function () {
  const light = document.querySelector('.light');

  function toggle() {
    if (light.classList.contains('off')) {
      light.classList.remove('off');
      light.classList.add('on');
    } else {
      light.classList.remove('on');
      light.classList.add('off');
    }
  }

  document.querySelector('.switcher').addEventListener('click', toggle);
})();