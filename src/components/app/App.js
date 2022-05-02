import MainPage from '../../pages/mainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import SingleComicsPage from '../../pages/singleComicsPage/SingleComicsPage';
import SingleCharacterPage from '../../pages/singleCharacterPage/SingleCharacterPage';
import PageHeader from '../pageHeader/PageHeader';
import PageFooter from '../pageFooter/PageFooter';
import PageContent from '../pageContent/PageContent';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { Favourites } from '../../pages/favourites/Favourites';
import { SearchHistory } from '../../pages/searchHistory/SearchHistory';
import { SignUpPage } from '../../pages/singUpPage/SignUpPage';
import { SignInPage } from '../../pages/signInPage/SignInPage';
import { Error404 } from '../../pages/Error404/Error404';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';

import '../../style/global.scss';
import '../../style/container.scss';
import '../../style/button.scss';
import '../../style/variables.scss';

export function App() {
  return (
    <BrowserRouter>
          <PageHeader />
          <PageContent>
            <Routes>
              <Route
                path={AppRoutes.Main}
                element={<ErrorBoundary>
                            <MainPage />
                          </ErrorBoundary>}
              />
              <Route
                path={AppRoutes.Character}
                element={<ErrorBoundary>
                            <SingleCharacterPage />
                          </ErrorBoundary>}
              />
              <Route path={AppRoutes.Main} element={<SingleComicsPage />} />
              <Route 
                path={AppRoutes.SearchHistory}
                element={<PrivateRoute authStatus={AuthStatus.Auth}>
                            <ErrorBoundary>
                              <SearchHistory />
                            </ErrorBoundary>
                        </PrivateRoute>}
              />
              <Route 
                path={AppRoutes.MyFavs}
                element={<PrivateRoute authStatus={AuthStatus.Auth}>
                            <ErrorBoundary>
                              <Favourites />
                            </ErrorBoundary>
                        </PrivateRoute>}
              />
              <Route path={AppRoutes.SignIn} element={<SignInPage />} />
              <Route path={AppRoutes.SignUp} element={<SignUpPage />} />
              <Route path='*' element={<Error404 />}></Route>
            </Routes>
          </PageContent>
          <PageFooter />
    </BrowserRouter>
  );
}
