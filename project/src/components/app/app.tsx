import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
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
import {States} from '../../types/states';
import Loading from '../loading/loading';
import BrowserHistory from '../../browser-history/browser-history';

const mapStatesProps = ({promo, films, isDataLoaded}: States) => ({
  promo,
  films,
  isDataLoaded,
});

const connector = connect(mapStatesProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props : PropsFromRedux): JSX.Element {
  const {promo, films, isDataLoaded} = props;

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
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path = {AppRoute.OwnList}
          render = {({history}) => <OwnList ownFilms = {films}/>}
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
          <PlayerControl
            film={promo}
          />
        </Route>
        <Route exact path={AppRoute.Page404}>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
