import "./styles/common.scss";
import registerAllPartials from "./register";

// все страницы подгрузим пока сюда
import renderLogin from "./templates/pages/login/login";
import renderRegistration from "./templates/pages/registration/registration";
import renderChat from "./templates/pages/chat/chat";
import renderProfile from "./templates/pages/profile/profile";
import render404 from "./templates/pages/404/404";
import render5xx from "./templates/pages/5xx/5xx";

import renderMenu from "./components/ui/tmp-navigation/tmp-navigation";

registerAllPartials();

const app = document.getElementById("app");
if (!app) {
  throw new Error('Проверь структуру index.html, в нем должен быть элемент с id="app"');
}

// временная замена роутинга ибо пока до этого не дошли
function routeByParams(root: HTMLElement) {
  const searchParams = new URLSearchParams(window.location.hash.replace("#", ""));

  const page = searchParams.get("page");

  switch (page) {
    case "login":
      root.replaceChildren(renderLogin());
      break;
    case "registration":
      root.replaceChildren(renderRegistration());
      break;
    case "chat":
      root.replaceChildren(renderChat());
      break;
    case "profile":
      root.replaceChildren(renderProfile());
      break;
    case "404":
      root.replaceChildren(render404());
      break;
    case "5xx":
      root.replaceChildren(render5xx());
      break;
    default:
      root.replaceChildren(renderLogin());
  }

  root.append(renderMenu());
}

routeByParams(app);

window.addEventListener("hashchange", e => {
  e.preventDefault();
  routeByParams(app);
});
