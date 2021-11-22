import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import User from '../user/user';
import {useEffect} from 'react';
import {store} from '../../index';
import {fetchFavoriteFilms} from '../../store/actions-api';
import {useSelector} from 'react-redux';
import {getFavoriteFilms} from '../../store/user-process/selectors';

function OwnList() : JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteFilms());
  }, []);

  const favoriteFilms = useSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <Logo/>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          filmsCount={favoriteFilms.length}
          films={favoriteFilms}
        />
      </section>

      <Footer/>
    </div>
  );
}

export default OwnList;
