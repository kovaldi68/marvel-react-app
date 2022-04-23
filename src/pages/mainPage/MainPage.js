import ContentList from '../../components/contentList/ContentList';
import SearchForm from '../../components/searchForm/SearchForm';
import CharacterList from '../../components/characterList/CharacterList';

function MainPage() {
    return (
        <>
            <ContentList />
            <SearchForm />
            <CharacterList />
        </>
    );
}

export default MainPage;