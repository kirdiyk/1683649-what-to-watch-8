import {FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/actions-api';
import {Authentication} from '../../types/authentication';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../../const';

function SignIn() : JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const dispatch = useDispatch();

  const onSubmit = (authData: Authentication) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (email && password) {
      onSubmit({
        login: email,
        password: password,
      });
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <Logo/>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          {!isValidEmail &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}

          {!isValidPassword &&
          <div className="sign-in__message">
            <p>
              Please enter a valid password
            </p>
          </div>}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${(!isValidEmail || !email) && 'sign-in__field--error'}`}>
              <input id="user-email" className="sign-in__input" type="email" placeholder="Email address" name="user-email" required pattern={EMAIL_PATTERN.source} value={email} onChange={(evt) => setEmail(evt.currentTarget.value)} onBlur={(evt) => setIsValidEmail(!evt.currentTarget.validity.patternMismatch)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input id="user-password" className="sign-in__input" type="password" placeholder="Password" name="user-password" required pattern={PASSWORD_PATTERN.source} value={password} onChange={(evt) => setPassword(evt.currentTarget.value)} onBlur={(evt) => setIsValidPassword(!evt.currentTarget.validity.patternMismatch)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
