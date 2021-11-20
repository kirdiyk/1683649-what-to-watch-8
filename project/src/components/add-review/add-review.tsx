import {Link, useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect} from 'react';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import User from '../user/user';
import {States} from '../../types/states';

import {store} from '../../index';
import {ThunkAppDispatch} from '../../types/action';
import {fetchFilmInfoAction} from '../../store/actions-api';

type AddReviewProps = {
  id: string;
}

const mapStateToProps = ({currentFilm}: States) => ({currentFilm});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReview({currentFilm} : PropsFromRedux) : JSX.Element {
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

export default connector(AddReview);
