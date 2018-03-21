(() => {
  console.log('js file loded!');

//add to the string prototype to call the first letter
String.prototype.capIt = function () { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
  const sigils = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector('.lightbox'),
  closeLightbox = document.querySelector('.close-lightbox'),
  vidPlayer = document.querySelector('video');

//functions in the middle
  function loadMovie() {
    //turn on the lightbox
    lightbox.classList.add('show-lightbox');

    //next grab the right video based on the class name
    var house = this.className.split(' ')[1].capIt();

    vidPlayer.play();
  }

  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

//events at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie))
  closeLightbox.addEventListener('click', closeLBox);
})();
