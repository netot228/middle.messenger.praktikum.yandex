import Handlebars from 'handlebars';

// // ui
import TextInput from './components/ui/input/input.hbs?raw';
import ActionButton from './components/ui/action-button/action-button.hbs?raw';
import MinorButton from './components/ui/minor-button/minor-button.hbs?raw';
import ActionLink from './components/ui/action-link/action-link.hbs?raw';

export default function registerAllPartials(): void {
  Handlebars.registerPartial({
    // ui
    TextInput,
    ActionButton,
    MinorButton,
    ActionLink,
  });
}
