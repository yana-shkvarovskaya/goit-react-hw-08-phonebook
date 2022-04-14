import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Appbar from '../HeaderMenu/AppBar/AppBar';
import { authOperations } from 'redux/auth';
import s from './App.module.css';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRouter from 'routes/PublicRouter';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.header}>
      <Appbar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRouter exact path="/">
            <HomeView />
          </PublicRouter>

          <PublicRouter exact path="/register" restricted>
            <RegisterView />
          </PublicRouter>

          <PublicRouter exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRouter>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}
