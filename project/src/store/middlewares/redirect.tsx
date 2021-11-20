import History from '../../browser-history/browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';
import {ActionType} from '../../types/action';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          History.push(action.payload);
        }

        return next(action);
      };