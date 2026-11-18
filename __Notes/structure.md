project/
├── src/
│ ├── index.js # точка входа
│ ├── styles/
│ │ ├── main.scss # глобальные стили, переменные, миксины
│ │ ├── _variables.scss
│ │ ├── _mixins.scss
│ │ └── components/ # (опционально) если стили живут отдельно
│ ├── components/
│ │ └── card/
│ │ ├── card.hbs
│ │ ├── card.scss
│ │ └── card.js # логика компонента (если нужна)
│ ├── templates/
│ │ └── pages/
│ │ └── home.hbs # если нужен мультистраничный сайт
│ ├── partials/ # общие куски: header, footer
│ │ ├── header.hbs
│ │ └── footer.hbs
│ └── utils/ # хелперы, api-клиент и т.д.
├── static/ # (опционально) статика
├── index.html
├── package.json
└── vite.config.js

project/
├── src/
│ ├── index.js # точка входа
│ ├── styles/
│ │ ├── main.scss # глобальные стили, переменные, миксины
│ │ ├── _variables.scss
│ ├── components/
│ │ └── card/
│ │ ├── card.hbs
│ │ ├── card.scss - как эти стили подключить для card.hbs и где это делать?
│ ├── templates/
│ │ └── pages/
| | │ │ └── Login
| | | │ │ └── login.hbs -
| | | │ │ └── login.scss - как эти стили подключить для login.hbs и где это делать?
│ │ └── home.hbs
├── index.html
├── package.json
└── vite.config.js
