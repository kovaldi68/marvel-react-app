# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


Реализованы Требования к функциональности:

React

:white_check_mark: Пишем функциональные компоненты c хуками в приоритете над классовыми
:white_check_mark: Есть четкое разделение на умные и глупые компоненты 
:white_check_mark: Есть рендеринг списков (https://github.com/kovaldi68/marvel-react-app/blob/master/src/components/characterList/CharacterList.js)
:white_check_mark: Реализована хотя бы одна форма https://github.com/kovaldi68/marvel-react-app/blob/master/src/components/userForm/UserForm.js
:white_check_mark: Есть применение Контекст API (https://github.com/kovaldi68/marvel-react-app/blob/master/src/components/app/App.js)
:white_check_mark: Есть применение предохранителя (https://github.com/kovaldi68/marvel-react-app/blob/master/src/components/errorBoundary/ErrorBoundary.js)
:white_check_mark: Есть хотя бы один кастомный хук (https://github.com/kovaldi68/marvel-react-app/blob/master/src/pages/singleCharacterPage/SingleCharacterPage.js)
:white_check_mark: Хотя бы несколько компонентов используют PropTypes (https://github.com/kovaldi68/marvel-react-app/blob/0b7330e6abcd41e2add4092d8b99b1e523adf1c2/src/components/characterCard/CharacterCard.js, https://github.com/kovaldi68/marvel-react-app/blob/0b7330e6abcd41e2add4092d8b99b1e523adf1c2/src/components/likeButton/LikeButton.js)
:white_check_mark: Поиск не должен триггерить много запросов к серверу

Redux

:white_check_mark: Используем Modern Redux with Redux Toolkit (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
:white_check_mark: Используем слайсы (https://github.com/kovaldi68/marvel-react-app/blob/0b7330e6abcd41e2add4092d8b99b1e523adf1c2/src/components/store/userActionsSlice.js)
:white_check_mark: Есть хотя бы одна кастомная мидлвара (https://github.com/kovaldi68/marvel-react-app/blob/master/src/middleware/storageMw.js)
:x: Используется RTK Query (https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
:x: Используется Transforming Responses (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses)