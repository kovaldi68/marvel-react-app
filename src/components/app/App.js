import MainPage from '../../pages/mainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoutes } from '../../const';
import SingleComicsPage from '../../pages/singleComicsPage/SingleComicsPage';
import SingleCharacterPage from '../../pages/singleCharacterPage/SingleCharacterPage';
import ComicsListPage from '../../pages/comicsListPage/ComicsListPage';
import PageHeader from '../pageHeader/PageHeader';
import PageFooter from '../pageFooter/PageFooter';
import PageContent from '../pageContent/PageContent';
import { Favourites } from '../../pages/favourites/Favourites';
import { SearchHistory } from '../../pages/searchHistory/SearchHistory';
import { SignUpPage } from '../../pages/singUpPage/SignUpPage';
import { SignInPage } from '../../pages/signInPage/SignInPage';
import { Error404 } from '../../pages/Error404/Error404';

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
              <Route path={AppRoutes.MainChars} element={<MainPage />} />
              <Route path={AppRoutes.MainComics} element={<ComicsListPage />} />
              <Route path={AppRoutes.Character} element={<SingleCharacterPage />} />
              <Route path={AppRoutes.Comic} element={<SingleComicsPage />} />
              <Route path={AppRoutes.SearchHistory} element={<SearchHistory />} />
              <Route path={AppRoutes.MyFavsChars} element={<Favourites />} />
              <Route path={AppRoutes.SignIn} element={<SignInPage />} />
              <Route path={AppRoutes.SignUp} element={<SignUpPage />} />
              <Route path='*' element={<Error404 />}></Route>
            </Routes>
          </PageContent>
          <PageFooter />
    </BrowserRouter>
  );
}
