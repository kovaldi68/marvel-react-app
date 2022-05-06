import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../const';

export function PrivateRoute({ children, authStatus }) {
  const location = useLocation();

  if (!authStatus) {
    return <Navigate to={AppRoutes.SignIn} state={{from: location}} replace />;
  }

  return children;
}