import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {History} from 'history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

function AuthRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (authorizationStatus === AuthorizationStatus.Auth && path === AppRoute.Login) {
          return <Redirect to={AppRoute.Root} />;
        }
        return render(routeProps);
      }}
    />
  );
}

export default AuthRoute;
