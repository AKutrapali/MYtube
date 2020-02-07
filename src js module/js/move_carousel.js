import {maxresult, positionCarousel, inPositionCarousel, videoItems, videoTitle} from './variable_file';
import {createVideoItem} from './create_video_item';

export function removeCurrentElement(element) {
  if(element.length > 1){  
    for (let i = 0; i < maxresult; i ++ ) {
      if (element[i]) element[i].remove();
    }
  }
}

function patternMoveVideoCarousel(valueMove, data) {
  inPositionCarousel(valueMove);
  removeCurrentElement(videoItems);
  removeCurrentElement(videoTitle);
  if(positionCarousel === maxresult) inPositionCarousel(-positionCarousel);
  if(positionCarousel === -1) inPositionCarousel(maxresult);
  createVideoItem(data);
}

export function moveVideoCarousel(data) {
  const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');
  rightButton.addEventListener("click", () => {patternMoveVideoCarousel(1, data)});
  leftButton.addEventListener("click",() => {patternMoveVideoCarousel(-1, data)});
};