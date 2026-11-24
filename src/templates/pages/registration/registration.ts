import "./registration.scss";
import Handlebars from "handlebars";
import template from "./registration.hbs?raw";

const tmpl = Handlebars.compile(template);

// возвращать буду html элемент и вставлять там в дом
// нужно, чтобы показать алерты по кнопке регистрации

export default function renderRegistration(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl({ title: "Регистрация" });

  // здесь я пока продублирую логику показа обязательных полей из логина
  // позже у каждого компонента будет свой обработчик
  // временно обработаем показ уведомления об обязательности ввода поля
  const loginSubmit = container.querySelector<HTMLDivElement>(".registration_submit");
  if (loginSubmit) {
    loginSubmit.addEventListener("click", e => {
      e.preventDefault();

      container
        .querySelectorAll<HTMLDivElement>(".form .input[data-required='required']")
        .forEach(el => {
          const input = el.querySelector<HTMLInputElement>("input:required");
          if (input?.value == "") {
            el.classList.add("alarm");
            setTimeout(() => {
              el.classList.remove("alarm");
            }, 1500);
          }
        });
    });
  }

  return container;
}
