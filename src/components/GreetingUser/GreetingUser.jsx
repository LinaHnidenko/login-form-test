import { useSelector } from 'react-redux';
import css from './GreetingUser.module.css';

export const GreetingUser = () => {
  const { name } = useSelector(state => state.loginForm);

  return (
    <div className={css.wrapper}>
      <div className="background">
        <div className={css.ball}></div>
      </div>
      <h1 className={css.span}>
        Welcome, {name} <span className={css.wave}>👋</span> <br />
        You are logged in.
      </h1>
    </div>
  );
};
