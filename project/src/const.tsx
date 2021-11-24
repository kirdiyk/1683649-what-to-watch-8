export enum AppRoute {
  Root = '/',
  Login = '/login',
  OwnList = '/mylist',
  AddReview = '/review',
  Film = '/films/',
  Player = '/player/',
  Page404 = '/page-not-found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
  Favorite = '/favorite',
}

<<<<<<< HEAD
export enum FilmListType {
  MainList = 'MainList',
  SimilarList = 'SimilarList',
  UserList = 'UserList',
}

=======
>>>>>>> 6dec789 (правки базовые критерии)
export const initialFilm = {
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

export enum RatingGrades {
  Bad = 0,
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export const BACKGROUND_REVIEW_FORM = 'rgba(255, 255, 255, 0.4)';

export const LIMIT_COUNTER_START = 1;

export const CLASS_TAB_ACTIVE = 'film-nav__item--active';

export const ALL_GENRES = 'All genres';

export const CLASS_GENRE_ACTIVE = 'catalog__genres-item--active';

export const STEP_FILMS = 8;

export const SIMILAR_FILM_NUMBER = 4;

export const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const USER_GRADES_NULL = 0;

export const COMMENT_LENGHT_MIN = 50;

export const COMMENT_LENGHT_MAX = 400;

<<<<<<< HEAD
=======
export const EMAIL_PATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const PASSWORD_PATTERN = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;

>>>>>>> 6dec789 (правки базовые критерии)

