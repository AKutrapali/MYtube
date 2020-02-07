import {closedPlayBlockButton, playVideoBlock, videoIframe, header, main, footer} from './variable_file';

export function playVideo(data:any, event:any):void {
  if(!event.target.parentNode.id.includes('video_item')) return;
  header[0].style.opacity = '0.2';
  main[0].style.opacity = '0.2';
  footer[0].style.opacity = '0.2';
  playVideoBlock.style.display = "block";
  closedPlayBlockButton.style.display = "block";
  videoIframe.src=`https://www.youtube.com/embed/${data.items[event.target.parentNode.id.slice(10)].id.videoId}?autoplay=1&rel=0`;
}

export function closePlayBlock():void {
  header[0].style.opacity = '1';
  main[0].style.opacity = '1';
  footer[0].style.opacity = '1';
  playVideoBlock.style.display = "none";
  closedPlayBlockButton.style.display = "none";
  videoIframe.src='';
}