import React from 'react';
import MainPage from '../../pages/mainPage/MainPage';
import SingleComicsPage from '../../pages/singleComicsPage/SingleComicsPage';
import PageHeader from '../pageHeader/PageHeader';
import PageFooter from '../pageFooter/PageFooter';
import PageContent from '../pageContent/PageContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { SingleCharacterPage } from '../../pages/singleCharacterPage/SingleCharacterPage';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { Favourites } from '../../pages/favourites/Favourites';
import { SearchHistory } from '../../pages/searchHistory/SearchHistory';
import { SignUpPage } from '../../pages/singUpPage/SignUpPage';
import { SignInPage } from '../../pages/signInPage/SignInPage';
import { Error404 } from '../../pages/Error404/Error404';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';
import { SearchResults } from '../../pages/searchResults/SearchResults';
import { useSelector } from 'react-redux';

import '../../style/global.scss';
import '../../style/container.scss';
import '../../style/button.scss';
import '../../style/variables.scss';

export const LogoContext = React.createContext('world');


export function App() {
  const isLogin = useSelector(state => state.userActions.isLogin);

  return (
    <BrowserRouter>
          <LogoContext.Provider value='universe'>
            <PageHeader />
          </LogoContext.Provider>
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
                element={<PrivateRoute authStatus={isLogin}>
                            <ErrorBoundary>
                              <SearchHistory />
                            </ErrorBoundary>
                        </PrivateRoute>}
              />
              <Route 
                path={AppRoutes.MyFavs}
                element={<PrivateRoute authStatus={isLogin}>
                            <ErrorBoundary>
                              <Favourites />
                            </ErrorBoundary>
                        </PrivateRoute>}
              />
              <Route path={AppRoutes.SignIn} element={<SignInPage />} />
              <Route path={AppRoutes.SignUp} element={<SignUpPage />} />
              <Route path={AppRoutes.SearchResult} element={<SearchResults />} />
              <Route path='*' element={<Error404 />}></Route>
            </Routes>
          </PageContent>
          <LogoContext.Provider value='universe aswell'>
            <PageFooter />
          </LogoContext.Provider>
    </BrowserRouter>
  );
}
