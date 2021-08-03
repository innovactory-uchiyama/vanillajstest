import { increment } from "./js/part_of_js";
import "./css/button.scss"
import robotImg from "./assets/img/robot.png";

var count = -1
var counter = document.createElement('p');
counter.textContent = count.toString()

const root = document.getElementById("root")
if (root) {
    root.appendChild(createDecorateButton())
    counter.textContent = increment(count)
    root.appendChild(counter)
    var img = new Image()
    img.src = robotImg
    root.appendChild(img)
}

function createDecorateButton() {
    const button = document.createElement("div");
    button.className = 'decorate-button'
    const buttonText = document.createElement('p')
    buttonText.className = 'button-text'
    buttonText.textContent = 'BUTTON'
    button.appendChild(buttonText)
    button.addEventListener("click", () => {
        counter.textContent = increment(parseInt(counter.textContent))
    });
    return button
}
