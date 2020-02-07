/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import '../css/style.scss';
import '../css/style.css';

const videoContainer = document.getElementById('videoContainer');
const inputSearch = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('buttonSearch');
const videoBlock = document.getElementById('videoBlock');
const videoItems = [];
const videoTitle = [];
const videoImg = [];
let positionCarousel = 0
const wrapper = document.getElementById('wrapper');

const previewWrapper = document.getElementById('previewWrapper');

function animationPreview(element) {
  element.style.opacity = '0';
  let counter = 0;
  let counterCycle = -1;
  let opacity = 0
  const previewTextPattern = [
    "Why do you need youtube",'if you have','MYtube'
  ]
 
  function opacityPreviewText() {
    if(opacity <= 0) {
      counter = +0.02;
      counterCycle += 1;
     
      if(counterCycle === 3) {
        
        clearInterval(timer);
        wrapper.style.display = 'block';
        previewWrapper.style.display = 'none';
      }
      if(counterCycle === 2) element.style.color = "blue";
      element.innerText = previewTextPattern[counterCycle];
    };
    if(opacity > 1.2) counter = -0.02;
    opacity += counter;
    element.style.opacity = opacity;
    
   
  }
  const timer = setInterval(opacityPreviewText, 40);
 /* if(counterCycle === 3) {
    debugger
    clearInterval(timer);}*/
}


function loadPreview() {
  wrapper.style.display = 'none';
  previewWrapper.style.display = 'flex';
  const previewText = document.createElement ("p");
  previewText.className = "preview_text";
  previewWrapper.append(previewText);
  
  animationPreview(previewText);
 

}
loadPreview();

const maxresult = 25;
const youtubeAPI = "AIzaSyA47IwEeeJUsiXUeT4NtkVZUZCxNX02bWs";
let data = "";
async function getDataVideo() {
  const searchText = inputSearch.value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxresult}&q=${searchText}&key=${youtubeAPI}`;
  const response = await fetch(url);
  data = await response.json();
  //console.log(`https://www.youtube.com/embed/${data.items[i].id.videoId}`);
  positionCarousel = 0
  createVideoItem(positionCarousel);
  console.log(videoImg[2])
  videoImg[positionCarousel].addEventListener('click', playVideo)
  
}

function removeCurrentElement(element) {
  if(element.length > 1){  
    for (let i = 0; i < maxresult; i ++ ) {
      if (element[i]) element[i].remove();
    }
  }
}


getDataVideo();
buttonSearch.addEventListener('click', function () {
  removeCurrentElement(videoItems);
  removeCurrentElement(videoTitle);
  getDataVideo();
 
});


function moveVideoCarousel() {
  
  const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');
  rightButton.addEventListener("click",function() {
    positionCarousel += 1;
    removeCurrentElement(videoItems);
    removeCurrentElement(videoTitle);
    if(positionCarousel === maxresult) positionCarousel = 0;
    createVideoItem(positionCarousel);
    videoImg[positionCarousel].addEventListener('click', playVideo)
  });
  leftButton.addEventListener("click",function() {
    positionCarousel -= 1;
    removeCurrentElement(videoItems);
    removeCurrentElement(videoTitle);
    if(positionCarousel === -1) positionCarousel = maxresult - 1;
    createVideoItem(positionCarousel)
    videoImg[positionCarousel].addEventListener('click', playVideo)
  });
}
moveVideoCarousel();

function defineClassElement (i,n) {
  switch (i) {
    case 0 :
      videoItems[n].style.cssText = '-webkit-filter: grayscale(100%); width:5%; z-index:100; left:0%; top:50%'; 
      break;
    case 1 :
      videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:20%; z-index:101; left:25%; top:50%'; 
      break;
    case 2 :
      videoItems[n].style.cssText = '-webkit-filter: grayscale(0%); width:37%; z-index:102; left:50%; top:50%'; 
      break; 
    case 3 :
      videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:20%; z-index:101; left:75%; top:50%'; 
      break;
    case 4 :
      videoItems[n].style.cssText = '-webkit-filter: grayscale(100%); width:5%; z-index:100; left:100%; top:50%'; 
      break;
    default:
  }
}

function createVideoItem(currentPosition) {
  let n
  for (let i = 0; i < 5; i ++ ) {
    
    n = currentPosition - 2 + i;
    if(n === maxresult) n = 0;
    if(n > maxresult) n -= maxresult;
    if(n < 0) n += maxresult;
    videoItems[n] = document.createElement('li');
    videoItems[n].className = "video_items";
    videoTitle[n] = document.createElement('div');
    videoTitle[n].className = "video_title";
    videoTitle[n].innerText = data.items[n].snippet.title; 
    videoImg[n] = document.createElement('img');
    videoImg[n].className = "video_img";
    videoImg[n].src = data.items[n].snippet.thumbnails.high.url;
    videoItems[n].append(videoImg[n]);
    if(i === 2) {
      videoBlock.append(videoTitle[n]);
    }
    videoContainer.append(videoItems[n]);
    defineClassElement (i,n);
    n++;
  }
}



let blueColor = 255
let a = 1
const logoBlue = document.getElementById('logoBlue')
function logoChangeColor () {
  if(blueColor === 255) a= -1;
  if(blueColor === 100) a= 1;
  blueColor+=a;
  logoBlue.style.color = `rgb(0, 0, ${blueColor})`


}

setInterval(logoChangeColor,20)


const buttonDayNight = document.getElementById('buttonDayNight');
const button = document.getElementsByClassName("button");
function changeBackground() {
  
  if (buttonDayNight.innerText === "Day") {
    buttonDayNight.innerText = "Night";
    wrapper.style.background = " rgb(218, 218, 206)";
    wrapper.style.color = " black";
    for (let i = 0; i < button.length; i ++ ) {
    button[i].classList.toggle("border_black");
    }
  } else {
    buttonDayNight.innerText = "Day";
    wrapper.style.background = "rgb(37, 37, 37)";
    wrapper.style.color = " white";
    for (let i = 0; i < button.length; i ++ ) {
      button[i].classList.toggle("border_black");
    }
  }
}

buttonDayNight.addEventListener("click", changeBackground);




function playVideo () {
  const header = document.getElementsByTagName('header');
  const main = document.getElementsByTagName('main');
  const footer = document.getElementsByTagName('footer');
  header[0].style.opacity = '0.2';
  main[0].style.opacity = '0.2';
  footer[0].style.opacity = '0.2';

  const playVideoBlock = document.createElement ('div');
  playVideoBlock.className = "play_video_block";
  wrapper.append(playVideoBlock);

  const closedPlayBlockButton = document.createElement ('div');
  closedPlayBlockButton.className = "button";
  closedPlayBlockButton.classList.add('position_close_button');
  closedPlayBlockButton.innerText = 'Close';
  wrapper.append(closedPlayBlockButton);
  closedPlayBlockButton.addEventListener('click', function () {
    header[0].style.opacity = '1';
    main[0].style.opacity = '1';
    footer[0].style.opacity = '1';
    closedPlayBlockButton.remove();
    playVideoBlock.remove();
  });

  const videoIframe = document.createElement('iframe')
  videoIframe.src=`https://www.youtube.com/embed/${data.items[positionCarousel].id.videoId}?autoplay=1&rel=0`;
  playVideoBlock.append(videoIframe); 
  videoIframe.allowfullscreen = "allowfullscreen" ;
}
