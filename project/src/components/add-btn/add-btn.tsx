import {AppRoute} from '../../const'; // лучше сначала все зависимости, а потом уже локальные импорты
//
import {Link, useParams} from 'react-router-dom';
import React from 'react';

type FilmParam = {
  id: string;
}

function AddBtn(): JSX.Element {
  const {id} = useParams<FilmParam>();

  return (
    <Link
      className="btn film-card__button"
      // это конечно красивее через generatePath делать
      to={`${AppRoute.Film}${id}${AppRoute.AddReview}`}
    >
      Add review
    </Link>
  );
}

export default React.memo(AddBtn);
