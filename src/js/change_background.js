import { wrapper, button, buttonDayNight } from './variable_file';
function setStyleBackground(day, color, textColor) {
    buttonDayNight.innerText = day;
    wrapper.style.background = color;
    wrapper.style.color = textColor;
}
export function changeBackground() {
    if (buttonDayNight.innerText === "Day") {
        setStyleBackground("Night", " rgb(218, 218, 206)", "black");
    }
    else {
        setStyleBackground("Day", "rgb(37, 37, 37)", "white");
    }
    for (var i = 0; i < button.length; i++) {
        button[i].classList.toggle("border_black");
    }
}
//# sourceMappingURL=change_background.js.map