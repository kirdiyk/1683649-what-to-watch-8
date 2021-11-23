import React from 'react';
import {Film} from '../../types/film';
import { CLASS_TAB_ACTIVE, Rating, RatingGrades, TabType} from '../../const';
import {formatDate, humanizeDate} from '../../utils';
import Review from '../review/review';
import {FilmReview} from '../../types/film-review';

type TabsProps = {
  film: Film;
  comments: FilmReview[];
  tab: string;
  onClick: (tab: string) => void;
}

function Tabs(props: TabsProps): JSX.Element {
  const {film, comments, tab, onClick} = props;
  const {
    genre,
    released,
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime} = film;

  function getRating(filmRating: number) {
    switch (true) {
      case filmRating >= RatingGrades.Bad && filmRating < RatingGrades.Normal:
        return Rating.Bad;
      case filmRating >= RatingGrades.Normal && filmRating < RatingGrades.Good:
        return Rating.Normal;
      case filmRating >= RatingGrades.Good && filmRating < RatingGrades.VeryGood:
        return Rating.Good;
      case filmRating >= RatingGrades.VeryGood && filmRating < RatingGrades.Awesome:
        return Rating.VeryGood;
      case filmRating === RatingGrades.Awesome:
        return Rating.Awesome;
    }
  }

  // жестокое название хД, обычно просто formatTime называют или как-то так
  // и можно вынести в utils подобные функции у тебя там
  function humanizeTime(filmDuration: number): string {
    const hours = Math.trunc(filmDuration/60) > 0 ? Math.trunc(filmDuration/60) : '';
    const minutes = filmDuration%60;

    return `${hours}h ${minutes}m`;
  }

  function getActiveTabContent(tabName: string) {
    switch (tabName) {
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
                <span className="film-card__details-value">{humanizeTime(runTime)}</span>
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
                />),
              ) : ''}
            </div>
          </div>
        );
    }
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${tab === TabType.Overview ? CLASS_TAB_ACTIVE : ''}`}
            key={TabType.Overview}
          >
            лучше Link
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Overview)}
            >
              Overview
            </a>
          </li>
          <li
            className={`film-nav__item ${tab === TabType.Details ? CLASS_TAB_ACTIVE : ''}`}
            key={TabType.Details}
          >
             лучше Link
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Details)}
            >
              Details
            </a>
          </li>
          <li
            className={`film-nav__item ${tab === TabType.Reviews ? CLASS_TAB_ACTIVE : ''}`}
            key={TabType.Reviews}
          >
             лучше Link
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Reviews)}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>

      {getActiveTabContent(tab)}
    </div>
  );
}

export default React.memo(Tabs);
