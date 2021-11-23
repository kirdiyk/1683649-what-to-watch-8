import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { createAPI } from './api'; // пробелы
import {requireAuthorization} from './store/actions';
import {fetchFilmAction, checkAuthAction, fetchPromoFilmAction} from './store/actions-api';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';
import {rootReducer} from './store/reducer-root';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
