export const previewWrapper = document.getElementById('previewWrapper');
export const wrapper = document.getElementById('wrapper');
export const videoContainer = document.getElementById('videoContainer');
export const inputSearch = document.getElementById('inputSearch');
export const buttonSearch = document.getElementById('buttonSearch');
export const videoBlock = document.getElementById('videoBlock');
export const closedPlayBlockButton = document.getElementById('closedPlayBlockButton');
export const header = document.getElementsByTagName('header');
export const main = document.getElementsByTagName('main');
export const footer = document.getElementsByTagName('footer');
export const playVideoBlock = document.getElementById('playVideoBlock');
export const videoIframe = document.getElementById('iframe');
export const button = document.getElementsByClassName("button");
export const videoItems = [];
export const videoTitle = [];
export const videoImg = [];
export const maxresult = 25;
export const youtubeAPI = "AIzaSyA47IwEeeJUsiXUeT4NtkVZUZCxNX02bWs";
export const data = {};
export const buttonDayNight = document.getElementById('buttonDayNight');

// eslint-disable-next-line import/no-mutable-exports
export let positionCarousel = 0;
export function inPositionCarousel(num) {
    positionCarousel += num;
}
