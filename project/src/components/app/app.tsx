import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import OwnList from '../own-list/own-list';
import MoviePage from '../movie-page/movie-page';
import PlayerControl from '../player-control/player-control';
import Page404 from '../page404/page-404';
import PrivateRoute from '../route-private/route-private';
import AddReview from '../add-review/add-review';
import ReviewForm from '../review-form/review-form';
import Loading from '../loading/loading';
import BrowserHistory from '../../browser-history/browser-history';
import AuthRoute from '../auth-route/auth-route';
import {getDataLoadedStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const isDataLoaded = useSelector(getDataLoadedStatus);

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter history={BrowserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen />
        </Route>
        <Route exact path='/review'>
          <ReviewForm />
        </Route>
        <AuthRoute
          exact
          path={AppRoute.Login}
          render={({history}) => <SignIn />}
        >
        </AuthRoute>
        <PrivateRoute
          exact
          path = {AppRoute.OwnList}
          render = {({history}) => <OwnList />}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => (<AddReview/>)}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <PlayerControl/>
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
