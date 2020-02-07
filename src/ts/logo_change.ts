let blueColor:number = 255;
let difference:number = 1;
const logoBlue:any = document.getElementById('logoBlue');

export function logoChangeColor():void {
  if(blueColor === 255) difference= -1;
  if(blueColor === 100) difference= 1;
  blueColor += difference;
  logoBlue.style.color = `rgb(0, 0, ${blueColor})`
}