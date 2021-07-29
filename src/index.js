import { buttonClick } from "./js/part_of_js";
import "./css/button.scss"

console.log('loaded js')

const elements = document.getElementsByClassName("decorate-button");

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("click", buttonClick);
}