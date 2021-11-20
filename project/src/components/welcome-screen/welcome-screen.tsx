import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import {Film} from '../../types/film';
import {AppRoute, ALL_GENRES, FilmListType} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Genre from '../genre/genre';
import {States} from '../../types/states';
import ShowMore from '../show-more/show-more';
import User from '../user/user';

const mapStatesProps = ({currentGenre, promo, films, filmNumberLimit, authorizationStatus}: States) => ({
  currentGenre: currentGenre,
  promo,
  films,
  filmNumberLimit,
});

const connector = connect(mapStatesProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function getFilmsByGenre(genre: string, films: Film[]) {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

function WelcomeScreen(props: PropsFromRedux): JSX.Element | null {
  const history = useHistory();
  const isLoadedPromo = !!props.promo;
  if (!isLoadedPromo) {return null;}

  const {promo, currentGenre, films, filmNumberLimit} = props;
  const {id, name, genre, released, posterImage, backgroundImage} = promo;

  const filmsByGenre = getFilmsByGenre(currentGenre, films);

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
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`${AppRoute.Player}${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genre
            films={films}
          />

          <FilmList
            filmsCount={filmsByGenre.length > filmNumberLimit ? filmNumberLimit : filmsByGenre.length}
            typeList={FilmListType.MainList}
          />

          {filmsByGenre.length > filmNumberLimit ? <ShowMore /> : ''}

        </section>

        <Footer />
      </div>
    </>
  );
}

export default connector (WelcomeScreen);
