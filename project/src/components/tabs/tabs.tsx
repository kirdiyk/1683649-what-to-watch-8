import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute, CLASS_TAB_ACTIVE, Rating, TabType} from '../../const';
import {formatDate, humanizeDate} from '../../utils';
import Review from '../review/review';
import {FilmReview} from '../../types/film-review';


type TabsProps = {
  film: Film;
  comments: FilmReview[];
}

function Tabs(props: TabsProps): JSX.Element {
  const {film, comments} = props;
  const {
    id,
    genre,
    released,
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime} = film;

  const [activeTab, setActiveTab] = useState(TabType.Overview);

  //const filmReviews = reviews.find((review) => (review.filmId) === id);

  //const hasReviews = Boolean(filmReviews?.reviews?.length); ??

  function getRating(filmRating: number) {
    switch (true) {
      case filmRating >= 0 && filmRating < 3:
        return Rating.Bad;
      case filmRating >= 3 && filmRating < 5:
        return Rating.Normal;
      case filmRating >= 5 && filmRating < 8:
        return Rating.Good;
      case filmRating >= 8 && filmRating < 10:
        return Rating.VeryGood;
      case filmRating === 10:
        return Rating.Awesome;
    }
  }

  function getActiveTabContent(tab: string) {
    switch (tab) {
      case TabType.Overview:
        return (
          <>
            <div className="film-rating">
              <div className="film-rating__score">{rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getRating(rating)}</span>
                <span className="film-rating__count">{`${scoresCount} ratings`}</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>{description}</p>

              <p className="film-card__director"><strong>Director: {director}</strong></p>

              <p className="film-card__starring">
                <strong>Starring: {starring.join(', ')} and other
                </strong>
              </p>
            </div>
          </>
        );
      case TabType.Details:
        return (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value" style={{whiteSpace: 'pre-line'}}>
                  {starring.join(', \n')}
                </span>
              </p>
            </div>

            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{runTime}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{released}</span>
              </p>
            </div>
          </div>
        );
      case TabType.Reviews:
        return (
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              {comments !== null ? comments.map((review) => (
                <Review
                  key = {review.id}
                  film={film}
                  author={review.user.name}
                  dateTime={formatDate(review.date)}
                  dateText={humanizeDate(review.date)}
                  rating={review.rating}
                  quote={review.comment}
                />)) : ''}
            </div>
          </div>
        );
    }
  }

  useEffect(() => {
    setActiveTab(TabType.Overview);
  }, [id]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabType.Overview ? CLASS_TAB_ACTIVE : ''}`}>
            <Link
              to={`${AppRoute.Film}${id}`}
              className="film-nav__link"
              onClick={() => setActiveTab(TabType.Overview)}
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabType.Details ? CLASS_TAB_ACTIVE : ''}`}>
            <Link
              to={`${AppRoute.Film}${id}`}
              className="film-nav__link"
              onClick={() => setActiveTab(TabType.Details)}
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabType.Reviews ? CLASS_TAB_ACTIVE : ''}`}>
            <Link
              to={`${AppRoute.Film}${id}`}
              className="film-nav__link"
              onClick={() => setActiveTab(TabType.Reviews)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      {getActiveTabContent(activeTab)}
    </div>
  );
}

export default Tabs;
