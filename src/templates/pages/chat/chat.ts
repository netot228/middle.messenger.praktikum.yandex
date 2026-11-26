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

  const dialogList = container.querySelector<HTMLUListElement>(".chat-mainarea-dialog-wrapper");
  const chatForm = container.querySelector<HTMLFormElement>(".chat-mainarea-form");
  const chatSubmitBtn = chatForm?.querySelector<HTMLButtonElement>(".send-message-button");
  const chatTextArea = container.querySelector<HTMLTextAreaElement>("#_id_chat_input")!;
  const emojiBlock = container.querySelector<HTMLDivElement>(".emoji");
  const emojiTabs = emojiBlock?.querySelectorAll<HTMLButtonElement>(".emoji-tab");
  const emojiItems = emojiBlock?.querySelectorAll<HTMLButtonElement>(".emoji-item");

  let activeTab = emojiBlock?.querySelector<HTMLButtonElement>(".emoji-tab.active");
  let activePanel = emojiBlock?.querySelector<HTMLDivElement>(".emoji-panel.active");

  emojiTabs?.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      if (tab.classList.contains("active")) return;

      activeTab?.classList.remove("active");
      tab.classList.add("active");
      activeTab = tab;
      activePanel?.classList.remove("active");

      let targetPanel = emojiBlock?.querySelector<HTMLDivElement>(
        `.emoji-panel[data-group="${tab.dataset.group}"]`
      );

      if (targetPanel) {
        targetPanel.classList.add("active");
        activePanel = targetPanel;
      }
    });
  });
  emojiItems?.forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      chatTextArea.value = chatTextArea.value + el.dataset.emoji;
    });
  });

  chatTextArea.addEventListener("keydown", e => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      chatForm?.requestSubmit();
    }
  });

  chatSubmitBtn?.addEventListener("click", e => {
    e.preventDefault();
    chatForm?.requestSubmit();
  });

  chatForm?.addEventListener("submit", e => {
    e.preventDefault();
    let li = document.createElement("li");
    li.className = "message self";
    li.textContent = chatTextArea.value;
    chatTextArea.value = "";

    dialogList?.append(li);
  });

  return container;
}
