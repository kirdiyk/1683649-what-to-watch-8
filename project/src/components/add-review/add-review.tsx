import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import User from '../user/user';
import {getCurrentFilm} from '../../store/films-data/selectors';
import {store} from '../../index';
import {ThunkAppDispatch} from '../../types/action';
import {fetchFilmInfoAction} from '../../store/actions-api';

type AddReviewProps = {
  id: string;
}

function AddReview() : JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const {id} = useParams<AddReviewProps>();

  const titlePoster = `${currentFilm.name} poster`;
  const filmPage = `/films/${id}`;

  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchFilmInfoAction(Number(id)));
  }, [id]);

  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={filmPage} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                {/* тега а поидее не должно быть */}
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <User/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={titlePoster} width="218" height="327"/>
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}

export default AddReview;
