import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmail, setName, setPassword } from 'redux/loginFormSlice';

export const LoginForm = () => {
  const { name, email, password } = useSelector(state => state.loginForm);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      dispatch(setName(target.value));
    }
    if (target.name === 'email') {
      dispatch(setEmail(target.value));
    }
    if (target.name === 'password') {
      dispatch(setPassword(target.value));
    }
  };
  const SubmitButton = () => {
    if (name && email && password) {
      return <button type="submit">Log In</button>;
    } else {
      return (
        <button type="submit" disabled>
          Log In
        </button>
      );
    }
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </label>
        <Link to="/greeting">
          <SubmitButton />
        </Link>
      </form>
    </div>
  );
};
