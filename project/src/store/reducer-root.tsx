import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {catalogProcess} from './catalog-process/catalog-process';
import {userProcess} from './user-process/user-process';

// нарушен критерий Б9 именование перечислений
export enum NameSpace {
  data = 'DATA',
  catalog = 'CATALOG',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsData,
  [NameSpace.catalog]: catalogProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
