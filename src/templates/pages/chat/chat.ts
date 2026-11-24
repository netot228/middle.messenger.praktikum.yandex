import "./chat.scss";
import Handlebars from "handlebars";
import template from "./chat.hbs?raw";

// возьмем мок со списком чата
import chatsListMock from "../../../mock/chats";
import tmpChatMock from "../../../mock/tmp_chat.json";

// добавить обработку от xss атак

const dialog = tmpChatMock.chat;

const tmpl = Handlebars.compile(template);

export default function renderChat(): HTMLElement {
  const container = document.createElement("main");
  container.innerHTML = tmpl({ chats: chatsListMock, dialog });
  return container;
}
