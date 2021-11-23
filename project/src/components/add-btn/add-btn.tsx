import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';

type FilmParam = {
  id: string;
}

function AddBtn(): JSX.Element {
  const {id} = useParams<FilmParam>();

  return (
    <Link
      className="btn film-card__button"
      to={`${AppRoute.Film}${id}${AppRoute.AddReview}`}
    >
      Add review
    </Link>
  );
}

export default React.memo(AddBtn);
