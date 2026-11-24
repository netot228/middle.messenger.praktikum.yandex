import "./404.scss";
import Handlebars from "handlebars";
import template from "./404.hbs?raw";

const tmpl = Handlebars.compile(template);

export default function render404(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl({});
  return container;
}
