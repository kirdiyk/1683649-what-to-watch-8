import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import OwnList from '../own-list/own-list';
import MoviePage from '../movie-page/movie-page';
import PlayerControl from '../player-control/player-control';
import Page404 from '../page404/page-404';
import PrivateRoute from '../route-private/route-private';
import AddReview from '../add-review/add-review';
import {Film} from '../../types/film';
import ReviewForm from '../review-form/review-form';

type AppScreenProps = {
  film: Film,
  films: Film[],
  filmsCount: number,
}

function App({film, films, filmsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen
            film={film}
            films={films}
            filmsCount={filmsCount}
          />
        </Route>
        <Route exact path='/review'>
          <ReviewForm />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <OwnList myFilms={films}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => (<AddReview film={films[1]}/>)} authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage
            similarFilms={films}
          />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <PlayerControl
            film={films[1]}
          />
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
