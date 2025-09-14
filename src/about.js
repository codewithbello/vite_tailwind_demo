import "./style.css";
import about from "./about.md?raw";
import markdownIt from "markdown-it";

document.querySelector("#app").innerHTML = markdownIt().render(about);
