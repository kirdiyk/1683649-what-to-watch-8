import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {CLASS_GENRE_ACTIVE, ALL_GENRES, AppRoute} from '../../const';
import {changeGenre, resetFilmLimit} from '../../store/actions';
import {getCurrentGenre} from '../../store/catalog-process/selectors';
import {getFilms} from '../../store/films-data/selectors';

function Genre(): JSX.Element {
  const currentGenre = useSelector(getCurrentGenre);
  const films = useSelector(getFilms);

  const dispatch = useDispatch();

  const onChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(resetFilmLimit());
  };

  const nonUniqueGenreList = films.map((film: Film) => film.genre);
  const uniqueGenreList = new Set(nonUniqueGenreList);
  const fullGenreList = [ALL_GENRES, ...uniqueGenreList];

  return (
    <ul className='catalog__genres-list'>
      {fullGenreList.map((genre: string) => (
        <li
          className={`catalog__genres-item ${genre === currentGenre ? CLASS_GENRE_ACTIVE : ''}`}
          key={genre}
        >
          <Link to={AppRoute.Root}
            className='catalog__genres-link'
            onClick={(evt) => {
              onChangeGenre(evt.currentTarget.innerText);
            }}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
}

export default Genre;
