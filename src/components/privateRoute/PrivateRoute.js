import { Route, Redirect } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';

function PrivateRoute({
  exact,
  path,
  render,
  authStatus,
}) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authStatus === AuthStatus.Auth
          ? render()
          : <Redirect to={AppRoutes.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;