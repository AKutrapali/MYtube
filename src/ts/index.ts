/* eslint-disable prefer-destructuring */
import '../css/style.scss';
import '../css/style.css';
import { loadPreview } from './preview';
import { getDataVideo} from './data_load';
import { moveVideoCarousel, removeCurrentElement } from './move_carousel';
import { logoChangeColor } from './logo_change';
import {buttonSearch, closedPlayBlockButton, videoContainer, buttonDayNight, videoItems, videoTitle, positionCarousel, inPositionCarousel} from './variable_file';
import {changeBackground } from './change_background';
import {createVideoItem, setQuantityVideoElement} from './create_video_item';
import {playVideo, closePlayBlock} from './play_video';

let data:any;

async function loadFullVideoPart(){
  inPositionCarousel(-positionCarousel);
  if(videoItems) removeCurrentElement(videoItems);
  if(videoTitle) removeCurrentElement(videoTitle);
  data = await getDataVideo();
  setQuantityVideoElement();
  createVideoItem(data);
  videoContainer.addEventListener('click', () => {playVideo(data, event)});
  moveVideoCarousel(data); 
}

loadPreview();
setInterval(logoChangeColor,20);
buttonDayNight.addEventListener("click", changeBackground);
loadFullVideoPart();
buttonSearch.addEventListener('click', loadFullVideoPart);
closedPlayBlockButton.addEventListener('click', () => {closePlayBlock()});











