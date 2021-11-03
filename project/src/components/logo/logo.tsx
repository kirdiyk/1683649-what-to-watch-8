import {Link} from 'react-router-dom';

 type LogoProps = {
   extraClassNameProp? : string;
 }

function Logo({extraClassNameProp = ''} : LogoProps): JSX.Element {
  return (
    <Link className={`logo__link ${extraClassNameProp}`} to="/">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
