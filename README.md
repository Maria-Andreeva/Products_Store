# 🛒 Products Store
Приложение для управления продуктами: добавление, редактирование и удаление товаров. Построено на **React 19 + TypeScript + Redux Toolkit**, с использованием **Firebase** для хранения данных.

## 📂 Структура проекта
```
products-store/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── apiClient.ts        # Работа с Firebase API
│   ├── components/
│   │   └── ProductList.tsx      # Компонент списка продуктов
│   ├── pages/
│   │   ├── CreateProductPage.tsx # Страница создания продукта
│   │   ├── EditProductPage.tsx   # Страница редактирования продукта
│   │   └── HomePage.tsx          # Главная страница
│   ├── redux/
│   │   └── productSlice.ts       # Redux slice для продуктов
│   ├── store/
│   │   └── store.ts              # Настройка Redux Store
│   ├── types/
│   │   └── Product.ts            # Типы данных
│   ├── App.tsx                   # Основной роутинг приложения
│   ├── index.tsx                 # Точка входа
│   └── main.css                  # Глобальные стили (опционально)
├── .env                           # Переменные окружения (ключи Firebase)
├── package.json
├── tsconfig.json
└── vite.config.ts / webpack.config.js
```

## 🚀 Технологии

* **React 19** - последняя версия React.

* **TypeScript** - строгая типизация проекта.

* **Redux Toolkit** - удобная работа с состоянием.

* **React Router v6** - маршрутизация.

* **Firebase Realtime Database / Firestore** - хранение продуктов.

* **Axios (или native ```fetch```)** - для работы с запросами.

* **Vite** - сборка проекта (если выбрал его).

## ⚙️ Установка и запуск проекта

** 1. Клонируем репозиторий:**
```
git clone https://github.com/your-username/products-store.git
cd products-store
```

**2. Устанавливаем зависимости:**
```
npm install
```
>**Если будут конфликты зависимостей (ERESOLVE ошибки), можно попробовать:**
>```
>npm install --legacy-peer-deps
>```
>или
>```
>npm install --force
>```

**3. Настраиваем .env файл:**

Создаем ```.env``` в корне проекта и прописываем туда данные от Firebase:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**4. Запускаем проект:**
```
npm start
```

Приложение будет доступно на:
```
http://localhost:3000 - локально
```
и на
```
https://maria-andreeva.github.io/project_test/ - удаленно
```

## 📦 Основные файлы
* **api/apiClient.ts** - настройка работы с Firebase через REST API или библиотеку SDK.

* **redux/productSlice.ts** - хранение состояния списка продуктов + async thunk для загрузки/добавления/обновления/удаления продуктов.

* **pages/CreateProductPage.tsx** - страница для создания нового продукта через форму.

* **pages/EditProductPage.tsx** - страница для редактирования существующего продукта.

* **components/ProductList.tsx** - компонент отображающий список товаров.

## 🛠 Команды

|**Скрипт**|**Описание**|
|-----------|----------------------|
|```npm run dev```|Запуск проекта в режиме разработки|
|```npm run build```|Сборка проекта для продакшена|
|```npm run preview```|Предпросмотр продакшн-сборки|

## 🧠 Особенности проекта
* Firebase используется как backend для хранения данных.
* Использование ```.env``` для защиты ключей API.
* Чистая структура проекта.
* Возможность быстро добавлять новые страницы и расширять проект.

## 📜 Лицензия
Все права защищены.  
Этот проект является интеллектуальной собственностью [Maria Andreeva](https://github.com/Maria-Andreeva).  
Копирование, использование, распространение или модификация без письменного разрешения автора запрещены.

## 💬 Контакты
[Maria Andreeva](https://github.com/Maria-Andreeva)


