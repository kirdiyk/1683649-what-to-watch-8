import History from '../../browser-history/browser-history';
import {Middleware} from 'redux';
import {States} from '../../types/states';
import {ActionType} from '../../types/action';

export const redirect: Middleware<unknown, States> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          History.push(action.payload);
        }

        return next(action);
      };
