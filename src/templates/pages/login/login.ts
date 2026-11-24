import "./login.scss";
import Handlebars from "handlebars";
import template from "./login.hbs?raw";

const tmpl = Handlebars.compile(template);

// возвращать буду html элемент и вставлять там в дом
// нужно, чтобы показать алерты по кнопке регистрации

export default function renderLogin(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl({ title: "Вход" });

  // временно обработаем показ уведомления об обязательности ввода поля
  const loginSubmit = container.querySelector<HTMLDivElement>(".login_submit");
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
