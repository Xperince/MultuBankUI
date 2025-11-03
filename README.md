## Запуск проекта (локально)

### Требования

- Node.js 18+ и npm

### Установка

```bash
npm install
```

### Базовый URL API

Для корректной работы из браузера используйте локальный прокси:

1. В файле `config.js` установите:

```js
const BASE_URL = "http://localhost:3000/api/";
```

2. Прокси на `http://localhost:3000/api/*` будет перенаправлять запросы на `https://vbank.open.bankingapi.ru/*` и добавлять CORS‑заголовки в ответ, чтобы браузер не блокировал запросы.

### Запуск дев-сервера

```bash
npm run dev
```

Откройте в браузере:

- `http://localhost:3000/index.html` — страница входа
- `http://localhost:3000/dashboard.html` — дашборд

### Как это работает

- `server.js` — Express-сервер, раздаёт статику из корня и проксирует `/api` на банк API.
- Все обращения из фронта должны начинаться с `BASE_URL` (`http://localhost:3000/api/`).

### Примечания

- Не коммитьте зависимости — добавлен `.gitignore` с `node_modules/`.
- Если вы вернёте `BASE_URL` на `https://vbank.open.bankingapi.ru/`, браузерные CORS‑ограничения заблокируют запросы.
