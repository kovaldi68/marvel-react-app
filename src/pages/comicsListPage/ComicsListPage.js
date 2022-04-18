import PageHeader from '../../components/pageHeader/PageHeader';
import PageFooter from '../../components/pageFooter/PageFooter';
import ComicsList from '../../components/comicsList/ComicsList';
import PageContent from '../../components/pageContent/PageContent';
import ContentList from '../../components/contentList/ContentList';

function ComicsListPage() {
    return (
        <>
            <PageHeader></PageHeader>
            <PageContent>
                <ContentList></ContentList>
                <ComicsList></ComicsList>
            </PageContent>
            <PageFooter></PageFooter>
        </>
    );
}

export default ComicsListPage;
