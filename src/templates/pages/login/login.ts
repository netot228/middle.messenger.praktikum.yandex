import './login.scss';
import template from './login.hbs?raw';
import Handlebars from 'handlebars';

const tmpl = Handlebars.compile(template);

// возвращать буду html элемент и вставлять там в дом
// нужно, чтобы показать алерты по кнопке регистрации

export default function renderLogin(): HTMLDivElement {
  const container = document.createElement('div');
  container.innerHTML = tmpl({ title: 'Регистрация' });
  return container;
}
