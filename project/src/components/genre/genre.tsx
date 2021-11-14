import {Link} from 'react-router-dom';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {MouseEvent} from 'react';
import {Film} from '../../types/film';
import {CLASS_GENRE_ACTIVE, ALL_GENRES, AppRoute} from '../../const';
import {States} from '../../types/states';
import {changeGenre} from '../../store/actions';

type GenreProps = {
  films: Film[];
  currentGenre: string;
}

const mapStateToProps = ({currentGenre}: States) => ({
  currentGenre: currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreProps;

function Genre(props: ConnectedComponentProps): JSX.Element {
  const {films, currentGenre, onChangeGenre} = props;

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
            onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
              onChangeGenre(evt.currentTarget.innerText);
            }}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
}

//export {Genre};
export default connector(Genre);
