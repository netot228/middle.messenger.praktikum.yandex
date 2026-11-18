import './tmp-navigation.scss';
import TmpMenu from './tmp-navigation.hbs?raw';

// временное решение для удобства навигации ревьюера

export default function renderMenu(): HTMLDivElement {
  const container = document.createElement('div');
  container.innerHTML = TmpMenu;

  const navigator = container.querySelector<HTMLDivElement>('.navigator');
  const navBtn = container.querySelector<HTMLButtonElement>('.navigator-btn');

  function menuToggle(e: MouseEvent) {
    navigator?.classList.toggle('open');
  }
  navBtn?.addEventListener('click', menuToggle);

  return container;
}
