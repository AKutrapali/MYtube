import {wrapper, button, buttonDayNight } from './variable_file';

function setStyleBackground(day:string, color:string, textColor:string) {
  buttonDayNight.innerText = day;
  wrapper.style.background = color;
  wrapper.style.color = textColor;
}

export function changeBackground():void {
  if (buttonDayNight.innerText === "Day") {
    setStyleBackground("Night", " rgb(218, 218, 206)", "black");
  } else {
    setStyleBackground("Day", "rgb(37, 37, 37)", "white");  
  }
  for (let i:number = 0; i < button.length; i ++ ) {
    button[i].classList.toggle("border_black");
  }
}