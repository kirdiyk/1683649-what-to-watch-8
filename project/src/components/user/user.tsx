import {AuthorizationStatus, AppRoute} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/actions-api';
import {States} from '../../types/states';

const mapStateToProps = ({authorizationStatus, user}: States) => ({
  authorizationStatus,
  user,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function User(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, user, onLogout} = props;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.OwnList}>
            <img
              src={user.avatarUrl === '' ? 'img/avatar.jpg' : user.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        {(authorizationStatus === AuthorizationStatus.Auth) ?
          <Link
            className="user-block__link"
            to={AppRoute.Root}
            onClick={() => onLogout()}
          >
            Sign out
          </Link> :
          <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>}
      </li>
    </ul>);
}

export default connector(User);
