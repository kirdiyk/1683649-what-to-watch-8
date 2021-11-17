import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import OwnList from '../own-list/own-list';
import MoviePage from '../movie-page/movie-page';
import PlayerControl from '../player-control/player-control';
import Page404 from '../page404/page-404';
import PrivateRoute from '../route-private/route-private';
import AddReview from '../add-review/add-review';
import ReviewForm from '../review-form/review-form';
import {States} from '../../types/states';
import Loading from '../loading/loading';

const mapStateToProps = ({promo, films, authorizationStatus, isDataLoaded}: States) => ({
  promo,
  films,
  //authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props : PropsFromRedux): JSX.Element {
  const {promo, films, /*authorizationStatus, */isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen />
        </Route>
        <Route exact path='/review'>
          <ReviewForm />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.OwnList}
          render={() => <OwnList myFilms={films}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => (
            <AddReview
              film={promo}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage
            similarFilms={films}
          />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <PlayerControl
            film={promo}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
