/* eslint-disable no-param-reassign */
import { previewWrapper, wrapper } from './variable_file';
function animationPreview(element) {
    var difference = 0;
    var counterCycle = -1;
    var opacity = 0;
    var previewTextPattern = [
        "Why do you need youtube", 'if you have', 'MYtube'
    ];
    element.style.opacity = '0';
    function opacityPreviewText() {
        if (opacity <= 0) {
            difference = +0.02;
            counterCycle += 1;
            if (counterCycle === 3) {
                // eslint-disable-next-line no-use-before-define
                clearInterval(timer);
                wrapper.style.display = 'block';
                previewWrapper.style.display = 'none';
            }
            if (counterCycle === 2)
                element.style.color = "blue";
            element.innerText = previewTextPattern[counterCycle];
        }
        ;
        if (opacity > 1.2)
            difference = -0.02;
        opacity += difference;
        element.style.opacity = String(opacity);
    }
    var timer = setInterval(opacityPreviewText, 30);
}
export function loadPreview() {
    var previewText = document.createElement("p");
    wrapper.style.display = 'none';
    previewWrapper.style.display = 'flex';
    previewText.className = "preview_text";
    previewWrapper.append(previewText);
    animationPreview(previewText);
}
//# sourceMappingURL=preview.js.map