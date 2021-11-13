import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
const store = createStore(
  reducer,
  composeWithDevTools(),
);

const Settings = {
  FILMS_COUNT: 20,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        film={films[5]}
        films={films}
        filmsCount={Settings.FILMS_COUNT}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
