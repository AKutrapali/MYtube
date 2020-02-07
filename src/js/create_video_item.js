import { videoItems, videoBlock, videoContainer, maxresult, videoImg, videoTitle, positionCarousel } from './variable_file';
var quantityElement;
var iStart;
var iFinish;
export function setStyleElement(n, i) {
    if (quantityElement === 5) {
        if (i === 0)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:5%; z-index:100; left:0%; top:50%';
        if (i === 1)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:20%; z-index:101; left:25%; top:50%';
        if (i === 2)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(0%); margin-bottom: 4px; width:36%; z-index:102; left:50%; top:50%';
        if (i === 3)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:20%; z-index:101; left:75%; top:50%';
        if (i === 4)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:5%; z-index:100; left:100%; top:50%';
    }
    if (quantityElement === 3) {
        if (i === 1)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:24%; z-index:101; left:25%; top:50%';
        if (i === 2)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(0%); width:44%; z-index:102; left:50%; top:50%';
        if (i === 3)
            videoItems[n].style.cssText = '-webkit-filter: grayscale(50%); width:24%; z-index:101; left:75%; top:50%';
    }
}
export function createVideoItem(data) {
    var n;
    for (var i = iStart; i < iFinish; i++) {
        n = positionCarousel + i;
        if (n === maxresult)
            n = 0;
        if (n > maxresult)
            n -= maxresult;
        if (n < 0)
            n += maxresult;
        videoItems[n] = document.createElement('li');
        videoItems[n].className = "video_items";
        videoItems[n].id = "video_item" + n;
        videoTitle[n] = document.createElement('div');
        videoTitle[n].className = "video_title";
        videoTitle[n].innerText = data.items[n].snippet.title;
        videoImg[n] = document.createElement('img');
        videoImg[n].className = "video_img";
        videoImg[n].src = data.items[n].snippet.thumbnails.high.url;
        videoItems[n].append(videoImg[n]);
        if (quantityElement < 6 && i === 2) {
            videoBlock.append(videoTitle[n]);
        }
        if (quantityElement > 6) {
            videoItems[n].append(videoTitle[n]);
        }
        videoContainer.append(videoItems[n]);
        setStyleElement(n, i);
        n++;
    }
}
export function setQuantityVideoElement() {
    if (window.innerWidth > 750) {
        quantityElement = 5;
        iStart = 0;
        iFinish = 5;
    }
    else if (window.innerWidth < 750 && window.innerWidth > 550) {
        quantityElement = 3;
        iStart = 1;
        iFinish = 4;
    }
    else if (window.innerWidth < 550) {
        quantityElement = 25;
        iStart = 0;
        iFinish = 25;
    }
}
//# sourceMappingURL=create_video_item.js.map