import { Link } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/" className={css.span}>
        Home
      </Link>
    </div>
  );
};
