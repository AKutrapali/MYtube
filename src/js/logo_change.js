let blueColor = 255;
let difference = 1;
const logoBlue = document.getElementById('logoBlue');

export function logoChangeColor() {
  if(blueColor === 255) difference= -1;
  if(blueColor === 100) difference= 1;
  blueColor += difference;
  logoBlue.style.color = `rgb(0, 0, ${blueColor})`
}