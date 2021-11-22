import {useDispatch} from 'react-redux';
import {changeFilmLimit, changeLimitCounter} from '../../store/actions';

function ShowMore(): JSX.Element {
  const dispatch = useDispatch();

  const onShowMore = () => {
    dispatch(changeLimitCounter());
    dispatch(changeFilmLimit());
  };
  return (
    <div className='catalog__more'>
      <button
        className='catalog__button'
        type='button'
        onClick={() : void => {
          onShowMore();
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
