import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

function Page404() : JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>
      </header>

      <div className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Oops! The page you were looking for was not found. </p>
        <Link className="page-not-found__link" to="/">Back to home</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
