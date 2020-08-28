(function () {
  const iconWrappers = document.querySelectorAll('.wrapper');
  [...iconWrappers].forEach(iw => {
    iw.addEventListener('click', activate);
  })

  function activate(evt) {
    [...iconWrappers].forEach(iw => {
      iw.classList.remove('active');
    });
    console.log(evt);
    evt.target.classList.add('active');
  }
})()