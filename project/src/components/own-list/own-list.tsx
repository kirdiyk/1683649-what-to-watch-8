import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import {Film} from '../../types/film';
import User from '../user/user';
import {FilmListType} from '../../const';

type OwnListProps = {
  ownFilms: Film[];
}

function OwnList({ownFilms} : OwnListProps) : JSX.Element {
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
          filmsCount = {9}
          typeList = {FilmListType.UserList}
        />
      </section>

      <Footer/>
    </div>
  );
}

export default OwnList;
