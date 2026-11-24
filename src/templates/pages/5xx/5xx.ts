import "./5xx.scss";
import Handlebars from "handlebars";
import template from "./5xx.hbs?raw";

const tmpl = Handlebars.compile(template);

export default function render5xx(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl({});
  return container;
}
