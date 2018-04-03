(() => {
  console.log('js file loded!');

//add to the string prototype to call the first letter
String.prototype.capIt = function () { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
  const sigils = document.querySelectorAll('.sigilContainer'),
  lightbox = document.querySelector('.lightbox'),
  closeLightbox = document.querySelector('.close-lightbox'),
  vidPlayer = document.querySelector('video'),
  houseName = document.querySelectorAll('.house-title'),
  houseInfo = document.querySelector('.house-info'),
  rewind = document.querySelector('.rewind'),
  playPause = document.querySelector('.play-pause'),
  forward = document.querySelector('.forward'),
  mute = document.querySelector('.mute'),
  imageBanner = document.querySelector('#houseImages');

var info = ['House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryens invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.',
'House Baratheon of Storms End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storms End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.',
'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of Kings Landing, which had been their puppet house anyway.The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in Kings Landing, the traditional seat of the royal family.',
'House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoys sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.',
'House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor.',
'House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.',
'House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Roberts Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.'];



//functions in the middle
  function loadMovie() {

    //turn on the lightbox
    lightbox.classList.add('show-lightbox');

    //next grab the right video based on the class name
    var house = this.className.split(' ')[1].capIt();

    houseName.forEach(houseName => houseName.textContent = `${house}`);
    //3 put the path together and make the class load and play

    vidPlayer.src = `video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`

    var infoText;

    if (house == "Stark"){
      infoText = info[0];
    }else if (house == "Baratheon") {
      infoText = info[1];
    }else if (house == "Lannister") {
      infoText = info[2];
    }else if (house == "Greyjoy") {
      infoText = info[3];
    }else if (house == "Tully") {
      infoText = info[4];
    }else if (house == "Arryn") {
      infoText = info[5];
    }else {
      infoText = info[6]
    }

    houseInfo.textContent = `${infoText}`;

    vidPlayer.load();
    vidPlayer.play();

    animateBanners(this.dataset.offset);
  }

  function animateBanners(offset) {
    //animate banners across the screen using the offset attribute
    // 600 is the width of each image,
    imageBanner.style.right = (offset * 600)+600 + "px";
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
    vidPlayer.currentTime = vidPlayer.currentTime + 10;
  }

  function reWd() {
    vidPlayer.currentTime = vidPlayer.currentTime + 10;
  }

  function toggleMute(){
    var theSVG = this.firstElementChild;

    if (vidPlayer.muted==true){
      theSVG.dataset.icon = "volume-up";
      vidPlayer.muted = false;
    } else {
      theSVG.dataset.icon = "volume-off";
      vidPlayer.muted = true;
    }
  }


  function closeLBox() {
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

//events at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));

  closeLightbox.addEventListener('click', closeLBox);

  vidPlayer.addEventListener('ended', closeLBox);
  playPause.addEventListener('click', togglePlay);
  forward.addEventListener('click', ffWd);
  rewind.addEventListener('click', reWd);
  mute.addEventListener('click', toggleMute);
})();
