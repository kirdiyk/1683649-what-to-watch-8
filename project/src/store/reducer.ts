import {ActionType, Actions} from '../types/action';
import {States} from '../types/states';
import films from '../mocks/films';
import { STEP_FILMS } from '../const';

const initialFilms = films.slice();

const initialState = {
  currentGenre: 'All genres',
  films: initialFilms,
  limitCounter: 1,
  filmNumberLimit: STEP_FILMS,
} as States;

const reducer = (state: States = initialState, action: Actions): States => {
  switch (action.type) {
    case ActionType.GetFilms:
      return {...state, films: action.payload};
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.ChangeLimitCounter:
      return {...state, limitCounter: state.limitCounter + 1};
    case ActionType.ChangeFilmNumberLimit:
      return {...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter};
    case ActionType.ResetFilmLimit:
      return {...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit};
    default:
      return state;
  }
};

export {reducer};
