import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import {Film} from '../../types/film';
import {ALL_GENRES} from '../../const';
import Genre from '../genre/genre';
import ShowMore from '../show-more/show-more';
import User from '../user/user';
import {getCurrentGenre, getFilmLimit} from '../../store/catalog-process/selectors';
import {getFilms, getPromo} from '../../store/films-data/selectors';
import PlayerBtn from '../player-btn/player-btn';
import OwnListBtn from '../own-list-btn/own-list-btn';
import { changeGenre, loadPromo, resetFavoriteFilms, resetFilmLimit} from '../../store/actions';
import {getFavoriteFilms} from '../../store/user-process/selectors';

function getFilmsByGenre(genre: string, films: Film[]) {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

function WelcomeScreen(): JSX.Element {
  const promo = useSelector(getPromo);
  const currentGenre = useSelector(getCurrentGenre);
  const films = useSelector(getFilms);
  const filmNumberLimit = useSelector(getFilmLimit);
  const favoriteFilms = useSelector(getFavoriteFilms);

  const dispatch = useDispatch();

  const {id, name, genre, released, posterImage, backgroundImage} = promo;

  const filmsByGenre = getFilmsByGenre(currentGenre, films);

  useEffect(() => {
    dispatch(changeGenre(ALL_GENRES));
    dispatch(resetFilmLimit());
    dispatch(resetFavoriteFilms);
    const matchedPromo = favoriteFilms.find((film: Film) => film.id === promo.id);
    if (matchedPromo) {
      dispatch(loadPromo(matchedPromo));
    }
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <User />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayerBtn
                  id={String(id)}
                />

                <OwnListBtn film={promo}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genre/>

          <FilmList
            filmsCount={filmsByGenre.length > filmNumberLimit ? filmNumberLimit : filmsByGenre.length}
            films={filmsByGenre}
          />

          {filmsByGenre.length > filmNumberLimit ? <ShowMore /> : ''}

        </section>

        <Footer />
      </div>
    </>
  );
}

export default WelcomeScreen;
