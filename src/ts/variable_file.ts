type HTMLorNull = HTMLElement | null;

export const previewWrapper: any = document.getElementById('previewWrapper');
export const wrapper: any = document.getElementById('wrapper');
export const videoContainer: any = document.getElementById('videoContainer');
export const inputSearch: any = document.getElementById('inputSearch');
export const buttonSearch: any = document.getElementById('buttonSearch');
export const videoBlock: any = document.getElementById('videoBlock');
export const closedPlayBlockButton: any = document.getElementById('closedPlayBlockButton');
export const buttonDayNight:any = document.getElementById('buttonDayNight');
export const header: any = document.getElementsByTagName('header');
export const main:any = document.getElementsByTagName('main');
export const footer:any = document.getElementsByTagName('footer');
export const playVideoBlock: any = document.getElementById('playVideoBlock');
export const videoIframe: any = document.getElementById('iframe');
export const button:HTMLCollection = document.getElementsByClassName("button");
export const videoItems:HTMLElement[] = [];
export const videoTitle:HTMLElement[]  = [];
export const videoImg:any  = [];
export const maxresult:number = 25;
export const youtubeAPI:string = "AIzaSyA47IwEeeJUsiXUeT4NtkVZUZCxNX02bWs";
export const data:any = {};


// eslint-disable-next-line import/no-mutable-exports
export let positionCarousel:number = 0;
export function inPositionCarousel(num:number):number {
    return positionCarousel += num;
}
