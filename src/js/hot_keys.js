import {closePlayBlock} from './play_video';
import { inputSearch} from './variable_file';
import { loadFullVideoPart} from './index';
import { patternMoveVideoCarousel} from './move_carousel';

export function hotKeys (event, data) {
  switch (event.key) {
    case "Escape":
      closePlayBlock();
      break;
    case "Enter":
      if(inputSearch) loadFullVideoPart();
      break;
    case "ArrowRight":
      patternMoveVideoCarousel(-1, data);
      break;
    case "ArrowLeft":
      patternMoveVideoCarousel(1, data);
      break;
    default:
  }
}