<<<<<<< HEAD

     # [RepoFinder 🚀](https://VLM-DeVoPs.github.io/repo-finder)

RepoFinder — это веб-приложение для поиска репозиториев на GitHub.

## 📌 Функции

✅ Поиск репозиториев по названию  
✅ Бесконечная прокрутка (Infinite Scroll)  
✅ Отображение информации о репозиториях

## 📷 Скриншоты

![Screenshot 1](<(screenshots/Screenshot_1.png)>)
![Screenshot 2](<(screenshots/Screenshot_2.png)>)
![Screenshot 3](<(screenshots/Screenshot_3.png)>)

## 🚀 Развертывание

Приложение доступно по адресу:  
🔗 [RepoFinder на GitHub Pages](https://VLM-DeVoPs.github.io/repo-finder/)

## 🛠️ Установка и запуск

````sh
git clone https://github.com/VLM-DeVoPs/repo-finder.git
cd repo-finder
npm install
npm run dev

🤝 Контакты
Автор: [VLM-DeVoPs](https://github.com/VLM-DeVoPs)


=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
````

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

> > > > > > > e7f4195 (Add project repo finder)
