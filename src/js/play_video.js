import {containerPlayBlock, videoIframe} from './variable_file';

export function playVideo(data, event) {
  if(!event.id.includes('video_item')) return;
  containerPlayBlock.style.display = "block";
  videoIframe.src=`https://www.youtube.com/embed/${data.items[event.id.slice(10)].id.videoId}?autoplay=1&rel=0`;
}

export function closePlayBlock() {
  containerPlayBlock.style.display = "none";
  videoIframe.src='';
}