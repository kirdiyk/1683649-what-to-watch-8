export enum AppRoute {
  Root = '/',
  Login = '/login',
  OwnList = '/mylist',
  AddReview = '/review',
  Film = '/films/',
  Player = '/player/',
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
}

export const CLASS_TAB_ACTIVE = 'film-nav__item--active';

export const ALL_GENRES = 'All genres';

export const CLASS_GENRE_ACTIVE = 'catalog__genres-item--active';

export const STEP_FILMS = 8;
