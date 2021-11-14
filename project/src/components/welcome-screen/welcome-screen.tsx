import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import {Film} from '../../types/film';
import {AppRoute, ALL_GENRES} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Genre from '../genre/genre';
import {States} from '../../types/states';

type FilmProps = {
  film: Film;
  filmsCount: number;
}

const mapStateToProps = ({currentGenre, films}: States) => ({
  currentGenre: currentGenre,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmProps;

function getFilmsByGenre(genre: string, films: Film[]) {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

function WelcomeScreen(props: ConnectedComponentProps): JSX.Element {
  const {film, filmsCount, currentGenre, films} = props;
  const {id, name, genre, released, posterImage, backgroundImage} = film;
  const history = useHistory();
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <Logo/>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
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
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`${AppRoute.Player}${id}`)}>
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
            filmsCount={filmsCount}
            films={getFilmsByGenre(currentGenre, films)}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default connector (WelcomeScreen);
