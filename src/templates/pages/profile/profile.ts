import "./profile.scss";
import Handlebars from "handlebars";
import template from "./profile.hbs?raw";

const tmpl = Handlebars.compile(template);

interface ProfileData {
  id: string;
  email: string;
  login: string;
  display_name: string;
  first_name: string;
  second_name?: string;
  phone?: string; // надо заменить на number и добавить форматирование значения на выводе
  avatar?: string;
}

// tmp profileData
const profileData: ProfileData = {
  id: "121313",
  email: "eric.cartman@gmail.com",
  login: "Cartman",
  display_name: "Eric Theodore Cartman",
  first_name: "Eric",
  second_name: "Cartman",
  phone: "+7 (977) 123-45-67",
  avatar: "/img/tmp_avatars/profile.jpg",
};

export default function renderProfile(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl(profileData);

  // не знаю пока как правильно, сделаю как на ум приходит после переделаю

  const searchParams = new URLSearchParams(window.location.hash.replace("#", ""));
  const profileEl = container.querySelector<HTMLDivElement>("#_id_profile_container")!;
  const avatarForm = profileEl.querySelector<HTMLFormElement>(".form-avatar-change");
  const mainForm = profileEl.querySelector<HTMLFormElement>(".form-profile-data");
  const passForm = profileEl.querySelector<HTMLFormElement>(".form-password-change");
  const editAvatarBtn = profileEl.querySelector<HTMLButtonElement>(".photo-change-btn");
  const modalChangeAvatar = profileEl.querySelector<HTMLDivElement>(".photo-modal");
  const modalCloseArea = profileEl.querySelector<HTMLDivElement>(".photo-modal .modal-curtain");

  editAvatarBtn?.addEventListener("click", e => {
    e.preventDefault();

    console.log("editavatar");
    console.dir(modalChangeAvatar);
    modalChangeAvatar?.classList.add("show");
  });
  modalCloseArea?.addEventListener("click", e => {
    modalChangeAvatar?.classList.remove("show");
  });

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

  function tmpSubmitHolder(e: SubmitEvent): void {
    e.preventDefault();
    window.location.href = "/#page=profile";
    modalChangeAvatar?.classList.remove("show");
  }
  // временно, после клика по кнопке сохранения вернуться к странице профиля
  // пока ничего не меняем, нигде не сохраняем, просто вернем обратно
  avatarForm?.addEventListener("submit", tmpSubmitHolder);
  mainForm?.addEventListener("submit", tmpSubmitHolder);
  passForm?.addEventListener("submit", tmpSubmitHolder);

  return container;
}
