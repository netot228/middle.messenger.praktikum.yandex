import "./profile.scss";
import Handlebars from "handlebars";
import template from "./profile.hbs?raw";

const tmpl = Handlebars.compile(template);

interface ProfileData {
  id: string;
  mail: string;
  login: string;
  name: string;
  surname?: string;
  phone?: string; // надо заменить на number и добавить форматирование значения на выводе
  avatar?: string;
}

// tmp profileData
const profileData: ProfileData = {
  id: "121313",
  mail: "eric.cartman@gmail.com",
  login: "Eric Theodore Cartman",
  name: "Eric",
  surname: "Cartman",
  phone: "+7 (977) 123-45-67",
  avatar: "/img/tmp_avatars/profile.jpg",
};

export default function renderProfile(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl(profileData);

  // не знаю пока как правильно, сделаю как на ум приходит после переделаю

  const searchParams = new URLSearchParams(window.location.hash.replace("#", ""));
  const profileEl = container.querySelector<HTMLDivElement>("#_id_profile_container")!;
  const profileSubmit = profileEl.querySelector<HTMLDivElement>(".profile-submit");

  if (searchParams.has("edit")) {
    profileEl.classList.add("form-edit");

    const inputs = container.querySelectorAll<HTMLInputElement>(".input-field");
    inputs.forEach((input, i) => {
      input.classList.add("editable");
      input.removeAttribute("disabled");
      if (i == 0) {
        window.addEventListener("DOMContentLoaded", () => {
          setTimeout(() => {
            input.focus();
          }, 0);
        });
      }
    });
  } else if (searchParams.has("change_pass")) {
    profileEl.classList.add("form-change-pass");
  }

  // временно, после клика по кнопке сохранения вернуться к странице профиля
  // пока ничего не меняем, нигде не сохраняем, просто вернем обратно
  profileSubmit?.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "/#page=profile";
  });

  return container;
}
