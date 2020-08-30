(function () {
  const presets = document.querySelectorAll('.preset-container .inner-control-repeat');
  [...presets].forEach(p => {
    p.addEventListener('click', pressed)
  });

  function pressed(event) {
    if (!event.target.classList.contains('pressed')) {
      [...presets].forEach(p => p.classList.remove('pressed'));
      event.target.classList.add('pressed');
    }
  }
})()