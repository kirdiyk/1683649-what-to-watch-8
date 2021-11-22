import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';
import {logoutAction} from '../../store/actions-api';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';

function User(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.OwnList}>
            {(authorizationStatus === AuthorizationStatus.Auth) ?
              <img
                src={user.avatarUrl === '' ? 'img/avatar.jpg' : user.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
              /> : ''}
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

export default User;
