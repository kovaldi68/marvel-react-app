import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const';

export function PrivateRoute({ children, authStatus }) {
  if (authStatus !== 'AUTH') {
    return <Navigate to={AppRoutes.SignIn} replace />;
  }

  return children;
}