import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import PageFooter from '../../components/pageFooter/PageFooter';
import ContentList from '../../components/contentList/ContentList';
import SearchForm from '../../components/searchForm/SearchForm';
import CharacterList from '../../components/characterList/CharacterList';

function MainPage() {
    return (
        <>
            <PageHeader></PageHeader>
            <PageContent>
                <ContentList></ContentList>
                <SearchForm></SearchForm>
                <CharacterList></CharacterList>
            </PageContent>
            <PageFooter></PageFooter>
        </>
    );
}

export default MainPage;