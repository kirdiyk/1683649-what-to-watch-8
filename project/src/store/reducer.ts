import {ActionType, Actions} from '../types/action';
import {States} from '../types/states';
//import films from '../mocks/films';
import {AuthorizationStatus, STEP_FILMS} from '../const';

const initialPromoFilm = {
  id: 0,
  name:	'',
  posterImage:	'',
  previewImage:	'',
  backgroundImage:	'',
  backgroundColor:	'',
  description: '',
  rating:	0,
  scoresCount:	0,
  director:	'',
  starring: [],
  runTime:	0,
  genre:	'',
  released:	0,
  isFavorite:	false,
  videoLink:	'',
  previewVideoLink:	'',
};

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

const initialState = {
  currentGenre: 'All genres',
  promo: initialPromoFilm,
  films: [],
  currentFilm: initialPromoFilm,
  similarFilms: [],
  comments: [],
  limitCounter: 1,
  filmNumberLimit: STEP_FILMS,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
} as States;

const reducer = (state: States = initialState, action: Actions): States => {
  switch (action.type) {
    case ActionType.LoadPromo:
      return {...state, promo: action.payload} as States;
    case ActionType.LoadFilm:
      return {...state, currentFilm: action.payload} as States;
    case ActionType.LoadFilms:
      return {...state, films: action.payload} as States;
    case ActionType.LoadSimilarFilms:
      return {...state, similarFilms: action.payload} as States;
    case ActionType.LoadComments:
      return {...state, comments: action.payload} as States;
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
    case ActionType.ChangeUser:
      return {...state, user: action.payload} as States;
    default:
      return state;
  }
};

export {reducer};
