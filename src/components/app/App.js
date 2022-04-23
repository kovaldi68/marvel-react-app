import React, { Component } from 'react';
import '../../style/global.scss';
import '../../style/container.scss';
import '../../style/button.scss';
import '../../style/variables.scss';
// import SingleComicsPage from '../../pages/singleComicsPage/SingleComicsPage';
// import SingleCharacterPage from '../../pages/singleCharacterPage/SingleCharacterPage';
import MainPage from '../../pages/mainPage/MainPage';
// import ComicsListPage from '../../pages/comicsListPage/ComicsListPage';

class App extends Component {
  render() {
    return (
      <MainPage></MainPage>
      // <ComicsListPage></ComicsListPage>
      // <SingleCharacterPage></SingleCharacterPage>
      // <SingleComicsPage></SingleComicsPage>
    );
  }
}

export default App;
