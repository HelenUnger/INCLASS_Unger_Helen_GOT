(() => {
  console.log('js file loded!');

//add to the string prototype to call the first letter
String.prototype.capIt = function () { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
  const sigils = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector('.lightbox'),
  closeLightbox = document.querySelector('.close-lightbox'),
  vidPlayer = document.querySelector('video'),
  houseName = document.querySelector('.house-title'),
  rewind = document.querySelector('.rewind'),
  playPause = document.querySelector('.play-pause'),
  forward = document.querySelector('.forward'),
  imageBanner = document.querySelector('#houseImages');

//functions in the middle
  function loadMovie() {
    //turn on the lightbox
    lightbox.classList.add('show-lightbox');

    //next grab the right video based on the class name
    var house = this.className.split(' ')[1].capIt();

    //3 put the path together and make the class load and play
    vidPlayer.src =
    `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`

    houseName.textContent = `${house}`

    vidPlayer.load();
    vidPlayer.play();

    animateBanners(this.dataset.offset);
  }

  function animateBanners(offset) {
    //animate banners across the screen using the offset attribute
    // 600 is the width of each image, 
    imageBanner.style.right = (offset * 600) + "px";
  }


  function togglePlay(){
    var theSVG = this.firstElementChild;
    //flip this according to its viseo state
    //if playing make it pause, change the icon
    //if paused make it play, change the icon
    if (vidPlayer.paused){
      theSVG.dataset.icon = "pause";
      vidPlayer.play();
    } else {
      theSVG.dataset.icon = "play";
      vidPlayer.pause();
    }
  }

  function ffWd() {
    debugger;
  }

  function reWd() {
    debugger;
  }


  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

//events at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie))
  closeLightbox.addEventListener('click', closeLBox);

  vidPlayer.addEventListener('ended', closeLBox);
  playPause.addEventListener('click', togglePlay);
  forward.addEventListener('click', ffWd);
  rewind.addEventListener('click', reWd);
})();
