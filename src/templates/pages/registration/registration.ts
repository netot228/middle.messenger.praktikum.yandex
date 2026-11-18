import './registration.scss';
import Handlebars from 'handlebars';
import template from './registration.hbs?raw';

const tmpl = Handlebars.compile(template);

// возвращать буду html элемент и вставлять там в дом
// нужно, чтобы показать алерты по кнопке регистрации

export default function renderRegistration(): HTMLDivElement {
  const container = document.createElement('div');
  container.innerHTML = tmpl({ title: 'Регистрация' });
  return container;
}
