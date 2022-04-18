import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import PageFooter from '../../components/pageFooter/PageFooter';
import ContentList from '../../components/contentList/ContentList';
import ComicsAbout from '../../components/comicsAbout/ComicsAbout';

function SingleComicsPage() {
    return (
        <>
            <PageHeader></PageHeader>
            <PageContent>
                <ContentList></ContentList>
                <ComicsAbout></ComicsAbout>
            </PageContent>
            <PageFooter></PageFooter>
        </>
    );
}

export default SingleComicsPage;