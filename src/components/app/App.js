import MainPage from '../../pages/mainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoutes } from '../../const';
import SingleComicsPage from '../../pages/singleComicsPage/SingleComicsPage';
import SingleCharacterPage from '../../pages/singleCharacterPage/SingleCharacterPage';
import ComicsListPage from '../../pages/comicsListPage/ComicsListPage';
import PageHeader from '../pageHeader/PageHeader';
import PageFooter from '../pageFooter/PageFooter';
import PageContent from '../pageContent/PageContent';

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
              <Route path={AppRoutes.MainChars} element={<MainPage/>} />
              <Route path={AppRoutes.MainComics} element={<ComicsListPage/>} />
              <Route path={AppRoutes.Character} element={<SingleCharacterPage />} />
              <Route path={AppRoutes.Comic} element={<SingleComicsPage />} />
              <Route path='*'></Route>
            </Routes>
          </PageContent>
          <PageFooter />
    </BrowserRouter>
  );
}
