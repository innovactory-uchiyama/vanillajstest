import { increment } from "./js/part_of_js";
import "./css/button.scss"
import robotImg from "./assets/img/robot.png";

console.log('loaded js')

var count = -1
var counter = document.createElement('p');
counter.textContent = count.toString()

const root = document.getElementById("root")
if (root) {
    counter.textContent = increment(count)
    root.appendChild(counter)
    var img = new Image()
    img.src = robotImg
    root.appendChild(img)
}

const elements = document.getElementsByClassName("decorate-button");

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("click", () => {
        counter.textContent = increment(parseInt(counter.textContent))
    });
}