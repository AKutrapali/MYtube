var blueColor = 255;
var difference = 1;
var logoBlue = document.getElementById('logoBlue');
export function logoChangeColor() {
    if (blueColor === 255)
        difference = -1;
    if (blueColor === 100)
        difference = 1;
    blueColor += difference;
    logoBlue.style.color = "rgb(0, 0, " + blueColor + ")";
}
//# sourceMappingURL=logo_change.js.map