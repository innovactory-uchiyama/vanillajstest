// import { buttonClick } from "./js/part_of_js";
import "./css/button.scss"

console.log('loaded js')

var count = -1
var counter = document.createElement('p');
counter.textContent = count.toString()

const increment = () => {
    count = count + 1
    counter.textContent = (count)
}

const root = document.getElementsByClassName("root")[0]
if(root) {
    increment()
    root.appendChild(counter)
}

const elements = document.getElementsByClassName("decorate-button");

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("click", increment);
}