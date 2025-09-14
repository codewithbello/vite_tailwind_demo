import "./style.css";
import readme from "./readme.md?raw";
import markdownIt from "markdown-it";

document.querySelector("#app").innerHTML = markdownIt().render(readme);
