import {videoItems, videoBlock, videoContainer, maxresult, videoImg, videoTitle, positionCarousel} from './variable_file';

let quantityElement ;
let iStart;
let iFinish;

export function setStyleElement(n,i) {
  if(quantityElement === 5) {
    switch (i) {
      case 0:
        videoItems[n].classList.add('video_item53');
        break;
      case 1:
        videoItems[n].classList.add('video_item52');
        break;
      case 2:
        videoItems[n].classList.add('video_item51');
        break;
      case 3:
        videoItems[n].classList.add('video_item52');
        break;
      case 4:
        videoItems[n].classList.add('video_item53');
        break;
      default:
    }
  }
  if(quantityElement === 3) {
    switch (i) {
      case 1:
        videoItems[n].classList.add('video_item32');
        break;
      case 2:
        videoItems[n].classList.add('video_item31');
        break;
      case 3:
        videoItems[n].classList.add('video_item32');
        break;
      default:
    }
  }
}

export function createVideoItem(data) {
  let n;
  for (let i = iStart; i < iFinish; i ++ ) {
    n = positionCarousel + i;
    if(n === maxresult) n = 0;
    if(n > maxresult) n -= maxresult;
    if(n < 0) n += maxresult;
    videoItems[n] = document.createElement('li');
    videoItems[n].className = "video_items";
    videoItems[n].id = `video_item${n}`;
    videoTitle[n] = document.createElement('div');
    videoTitle[n].className = "video_title";
    videoTitle[n].innerText = data.items[n].snippet.title; 
    videoImg[n] = document.createElement('img');
    videoImg[n].className = "video_img";
    videoImg[n].src = data.items[n].snippet.thumbnails.high.url;
    videoItems[n].append(videoImg[n]);
    if(quantityElement < 6 && i === 2){
      videoBlock.append(videoTitle[n]);
    }
    if(quantityElement > 6){
      videoItems[n].append(videoTitle[n]);
    }
    videoContainer.append(videoItems[n]);
    setStyleElement(n,i);
    n++;
  }
}

export function setQuantityVideoElement() {
  if(window.innerWidth > 750) {
    quantityElement = 5; iStart = 0; iFinish = 5;
  } else if(window.innerWidth < 750 && window.innerWidth > 550) 
  {quantityElement = 3; iStart = 1; iFinish = 4;
  } else if(window.innerWidth < 550 ) 
  {quantityElement = 25; iStart = 0; iFinish = 25;
  } 
}