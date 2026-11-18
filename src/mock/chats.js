// мок любезно предоставленный алисой
export const chats = [
  {
    id: 1,
    title: "Приветственный чат",
    avatarUrl: "",
    unreadCount: 2,
    lastMessage: {
      author: "Бот",
      text: "<b>Добро пожаловать!</b>",
      time: "09:20",
    },
    members: [{ name: "Бот", avatarUrl: "" }],
  },
  {
    id: 2,
    title: "Frontend Crew",
    avatarUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Катя",
      text: "Код-ревью в четверг?",
      time: "18:05",
    },
    members: [
      { name: "Катя", avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "Витя", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Аня", avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: "Лёша", avatarUrl: "https://randomuser.me/api/portraits/men/76.jpg" },
    ],
  },
  {
    id: 3,
    title: "Марина Соколова",
    avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    unreadCount: 5,
    lastMessage: {
      author: "Марина",
      text: "Скинь, пожалуйста, макет главной 🙏",
      time: "12:41",
    },
    members: [
      { name: "Марина", avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg" },
    ],
  },
  {
    id: 4,
    title: "Design Review",
    avatarUrl: "https://randomuser.me/api/portraits/lego/2.jpg",
    unreadCount: 12,
    lastMessage: {
      author: "Олег",
      text: "Обновил фигму, посмотрите вторую страницу",
      time: "11:02",
    },
    members: [
      { name: "Олег", avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg" },
      { name: "Настя", avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg" },
      { name: "Дима", avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg" },
    ],
  },
  {
    id: 5,
    title: "Артём Кузнецов",
    avatarUrl: "https://randomuser.me/api/portraits/men/23.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Вы",
      text: "Отлично, тогда созвонимся в понедельник",
      time: "17:38",
    },
    members: [
      { name: "Артём", avatarUrl: "https://randomuser.me/api/portraits/men/23.jpg" },
    ],
  },
  {
    id: 6,
    title: "Курсы английского",
    avatarUrl: "https://randomuser.me/api/portraits/lego/3.jpg",
    unreadCount: 3,
    lastMessage: {
      author: "Ирина Владимировна",
      text: "Домашка на среду: два упражнения из юнита 7",
      time: "20:15",
    },
    members: [
      { name: "Ирина Владимировна", avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg" },
      { name: "Паша", avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg" },
      { name: "Лиза", avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "Максим", avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg" },
    ],
  },
  {
    id: 7,
    title: "Оля Петрова",
    avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    unreadCount: 1,
    lastMessage: {
      author: "Оля",
      text: "Ты видел новый сезон? Без спойлеров напиши, что думаешь 😄",
      time: "22:47",
    },
    members: [
      { name: "Оля", avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg" },
    ],
  },
  {
    id: 8,
    title: "Продуктовая команда",
    avatarUrl: "https://randomuser.me/api/portraits/lego/4.jpg",
    unreadCount: 27,
    lastMessage: {
      author: "Женя",
      text: "Взял тикет на фильтры, дедлайн — пятница",
      time: "14:22",
    },
    members: [
      { name: "Женя", avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg" },
      { name: "Света", avatarUrl: "https://randomuser.me/api/portraits/women/52.jpg" },
      { name: "Костя", avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
      { name: "Рита", avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg" },
      { name: "Толя", avatarUrl: "https://randomuser.me/api/portraits/men/88.jpg" },
    ],
  },
  {
    id: 9,
    title: "Дима Орлов",
    avatarUrl: "https://randomuser.me/api/portraits/men/91.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Дима",
      text: "Скинул презентацию на почту",
      time: "10:11",
    },
    members: [
      { name: "Дима", avatarUrl: "https://randomuser.me/api/portraits/men/91.jpg" },
    ],
  },
  {
    id: 10,
    title: "Котики компании 🐱",
    avatarUrl: "https://randomuser.me/api/portraits/lego/5.jpg",
    unreadCount: 44,
    lastMessage: {
      author: "Вера",
      text: "Фото с дедлайна: кот спит на клавиатуре",
      time: "16:30",
    },
    members: [
      { name: "Вера", avatarUrl: "https://randomuser.me/api/portraits/women/71.jpg" },
      { name: "Саша", avatarUrl: "https://randomuser.me/api/portraits/men/19.jpg" },
      { name: "Марго", avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg" },
    ],
  },
  {
    id: 11,
    title: "Сергей Иванов",
    avatarUrl: "https://randomuser.me/api/portraits/men/47.jpg",
    unreadCount: 2,
    lastMessage: {
      author: "Сергей",
      text: "Договор отредактировал, посмотри правки",
      time: "13:05",
    },
    members: [
      { name: "Сергей", avatarUrl: "https://randomuser.me/api/portraits/men/47.jpg" },
    ],
  },
  {
    id: 12,
    title: "Настольные игры Пятница",
    avatarUrl: "https://randomuser.me/api/portraits/lego/6.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Гриша",
      text: "Заказали пиццу, приходите к семи",
      time: "19:58",
    },
    members: [
      { name: "Гриша", avatarUrl: "https://randomuser.me/api/portraits/men/29.jpg" },
      { name: "Юля", avatarUrl: "https://randomuser.me/api/portraits/women/39.jpg" },
      { name: "Ваня", avatarUrl: "https://randomuser.me/api/portraits/men/61.jpg" },
    ],
  },
  {
    id: 13,
    title: "Катя Морозова",
    avatarUrl: "https://randomuser.me/api/portraits/women/57.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Вы",
      text: "Спасибо! Уже смотрю",
      time: "15:44",
    },
    members: [
      { name: "Катя", avatarUrl: "https://randomuser.me/api/portraits/women/57.jpg" },
    ],
  },
  {
    id: 14,
    title: "DevOps & Infra",
    avatarUrl: "https://randomuser.me/api/portraits/lego/7.jpg",
    unreadCount: 9,
    lastMessage: {
      author: "Рома",
      text: "Прод уехал в 12.0.3, инцидентов нет",
      time: "12:19",
    },
    members: [
      { name: "Рома", avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg" },
      { name: "Никита", avatarUrl: "https://randomuser.me/api/portraits/men/74.jpg" },
      { name: "Алёна", avatarUrl: "https://randomuser.me/api/portraits/women/90.jpg" },
    ],
  },
  {
    id: 15,
    title: "Бабушка",
    avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    unreadCount: 1,
    lastMessage: {
      author: "Бабушка",
      text: "Пирожки с капустой будут к субботе 🥟",
      time: "09:02",
    },
    members: [
      { name: "Бабушка", avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg" },
    ],
  },
  {
    id: 16,
    title: "Пятничный созвон",
    avatarUrl: "https://randomuser.me/api/portraits/lego/8.jpg",
    unreadCount: 6,
    lastMessage: {
      author: "Лена",
      text: "Перенесли на 15:00, ссылка та же",
      time: "11:48",
    },
    members: [
      { name: "Лена", avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg" },
      { name: "Илья", avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg" },
      { name: "Маша", avatarUrl: "https://randomuser.me/api/portraits/women/79.jpg" },
      { name: "Стас", avatarUrl: "https://randomuser.me/api/portraits/men/36.jpg" },
    ],
  },
  {
    id: 17,
    title: "Павел Ефимов",
    avatarUrl: "https://randomuser.me/api/portraits/men/85.jpg",
    unreadCount: 0,
    lastMessage: {
      author: "Павел",
      text: "Ок, договорились 👍",
      time: "18:59",
    },
    members: [
      { name: "Павел", avatarUrl: "https://randomuser.me/api/portraits/men/85.jpg" },
    ],
  },
  {
    id: 18,
    title: "Спортзал # legion",
    avatarUrl: "https://randomuser.me/api/portraits/lego/9.jpg",
    unreadCount: 15,
    lastMessage: {
      author: "Даня",
      text: "Кто сегодня на турнике к 19:00?",
      time: "17:12",
    },
    members: [
      { name: "Даня", avatarUrl: "https://randomuser.me/api/portraits/men/66.jpg" },
      { name: "Кира", avatarUrl: "https://randomuser.me/api/portraits/women/30.jpg" },
      { name: "Тимур", avatarUrl: "https://randomuser.me/api/portraits/men/78.jpg" },
    ],
  },
  {
    id: 19,
    title: "Служба поддержки",
    avatarUrl: "",
    unreadCount: 0,
    lastMessage: {
      author: "Поддержка",
      text: "Ваш тикет №4812 закрыт. Оцените работу, пожалуйста",
      time: "08:40",
    },
    members: [
      { name: "Поддержка", avatarUrl: "" },
    ],
  },
  {
    id: 20,
    title: "Лера Ким",
    avatarUrl: "https://randomuser.me/api/portraits/women/83.jpg",
    unreadCount: 3,
    lastMessage: {
      author: "Лера",
      text: "Отправила резюме по почте, посмотри до вечера",
      time: "21:03",
    },
    members: [
      { name: "Лера", avatarUrl: "https://randomuser.me/api/portraits/women/83.jpg" },
    ],
  },
];
