import {States} from '../../types/states';
import {Dispatch} from 'redux';
import {changeFilmLimit, changeLimitCounter} from '../../store/actions';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({limitCounter, filmNumberLimit}: States) => ({
  limitCounter,
  filmNumberLimit,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onShowMore() {
    dispatch(changeLimitCounter());
    dispatch(changeFilmLimit());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ShowMore({onShowMore}: PropsFromRedux): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() : void => {
          onShowMore();
        }}
      >
        Show more
      </button>
    </div>
  );
}

//export {ShowMore};
export default connector(ShowMore);
