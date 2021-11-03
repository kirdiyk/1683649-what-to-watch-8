import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import OwnList from '../own-list/own-list';
import MoviePage from '../movie-page/movie-page';
import PlayerControl from '../player-control/player-control';
import Page404 from '../page404/page-404';
import PrivateRoute from '../route-private/route-private';
import AddReview from '../add-rewie/add-rewie';

 type AppScreenProps = {
   title: string;
   genre: string;
   year: number;
 }

function App({title, genre, year} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen
            title = {title}
            genre = {genre}
            year = {year}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <OwnList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => (<AddReview
            title={'The Grand Budapest Hotel'}
            image={'img/bg-the-grand-budapest-hotel.jpg'}
            page={''}    />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerControl />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
