import { Route, Routes } from 'react-router-dom';
import { GreetingUser } from './GreetingUser/GreetingUser';
import { Layout } from './Layout/Layout';
import { LoginForm } from './LoginForm/LoginForm';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="greeting" element={<GreetingUser />} />
        </Route>
      </Routes>
    </div>
  );
};
