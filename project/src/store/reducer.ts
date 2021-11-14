import {ActionType, Actions} from '../types/action';
import {States} from '../types/states';
import films from '../mocks/films';

const initialFilms = films.slice();

const initialState = {
  currentGenre: 'All genres',
  films: initialFilms,
} as States;

const reducer = (state: States = initialState, action: Actions): States => {
  switch (action.type) {
    case ActionType.GetFilms:
      return {...state, films: action.payload};
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    default:
      return state;
  }
};

export {reducer};
