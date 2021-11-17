import {ActionType, Actions} from '../types/action';
import {States} from '../types/states';
import films from '../mocks/films';
import {AuthorizationStatus, STEP_FILMS} from '../const';

const initialFilms = films.slice();

const initialState = {
  currentGenre: 'All genres',
  films: initialFilms,
  limitCounter: 1,
  filmNumberLimit: STEP_FILMS,
} as States;

const reducer = (state: States = initialState, action: Actions): States => {
  switch (action.type) {
    case ActionType.LoadPromo:
      return {...state, promoFilm: action.payload} as States;
    case ActionType.LoadFilms:
      return {...state, films: action.payload} as States;
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload} as States;
    case ActionType.ChangeLimitCounter:
      return {...state, limitCounter: state.limitCounter + 1} as States;
    case ActionType.ChangeFilmLimit:
      return {...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter} as States;
    case ActionType.ResetFilmLimit:
      return {...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit} as States;
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      } as States;
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth} as States;
    default:
      return state;
  }
};

export {reducer};
