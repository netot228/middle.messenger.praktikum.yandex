import './chat.scss';
import Handlebars from 'handlebars';
import template from './chat.hbs?raw';

const tmpl = Handlebars.compile(template);

export default function renderChat(): HTMLDivElement {
  const container = document.createElement('div');
  container.innerHTML = tmpl({});
  return container;
}
