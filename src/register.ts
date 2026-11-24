import Handlebars from "handlebars";

// // ui
import Input from "./components/ui/input/input.hbs?raw";
import ActionButton from "./components/ui/action-button/action-button.hbs?raw";
import MinorButton from "./components/ui/minor-button/minor-button.hbs?raw";
import ActionLink from "./components/ui/action-link/action-link.hbs?raw";
import EmojiSet from "./components/ui/emoji-set/emoji-set.hbs?raw";
import Avatar from "./components/ui/avatar/avatar.hbs?raw";

// elements
import ChatItem from "./templates/pages/chat/chat-item/chat-item.hbs?raw";

// helpers
import getInitials from "./helpers/getInitials";

export default function registerAllPartials(): void {
  Handlebars.registerPartial({
    // ui
    Input,
    ActionButton,
    MinorButton,
    ActionLink,
    EmojiSet,
    Avatar,
    // components
    ChatItem,
  });

  Handlebars.registerHelper({
    getInitials,
  });
}
