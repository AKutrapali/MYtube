import { maxresult, positionCarousel, inPositionCarousel, videoItems, videoTitle } from './variable_file';
import { createVideoItem } from './create_video_item';
export function removeCurrentElement(element) {
    if (element.length > 1) {
        for (var i = 0; i < maxresult; i++) {
            if (element[i])
                element[i].remove();
        }
    }
}
function patternMoveVideoCarousel(valueMove, data) {
    inPositionCarousel(valueMove);
    removeCurrentElement(videoItems);
    removeCurrentElement(videoTitle);
    if (positionCarousel === maxresult)
        inPositionCarousel(-positionCarousel);
    if (positionCarousel === -1)
        inPositionCarousel(maxresult);
    createVideoItem(data);
}
export function moveVideoCarousel(data) {
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');
    rightButton.addEventListener("click", function () { patternMoveVideoCarousel(1, data); });
    leftButton.addEventListener("click", function () { patternMoveVideoCarousel(-1, data); });
}
;
//# sourceMappingURL=move_carousel.js.map