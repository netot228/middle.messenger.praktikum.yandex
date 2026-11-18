import './styles/common.scss';
import registerAllPartials from './register';

// все страницы подгрузим пока сюда
import renderLogin from './templates/pages/login/login';
import renderRegistration from './templates/pages/registration/registration';
import renderChat from './templates/pages/chat/chat';

import renderMenu from './components/ui/tmp-navigation/tmp-navigation';

registerAllPartials();

const app = document.getElementById('app');
if (!app) throw new Error('Проверь структуру index.html, в нем должен быть элемент с id="app"');

// временная замена роутинга ибо пока до этого не дошли

function routeByHash(root: HTMLElement) {
  root.innerHTML = '';
  const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));

  const hashPage = hashParams.get('page');

  switch (hashPage) {
    case 'registration':
      root.append(renderRegistration());
      break;
    case 'chat':
      root.append(renderChat());
      break;
    default:
      root.append(renderLogin());
  }

  root.append(renderMenu());
}

routeByHash(app);

window.addEventListener('hashchange', () => {
  routeByHash(app);
});

// app.innerHTML = Handlebars.compile('{{> Home}}')({});
