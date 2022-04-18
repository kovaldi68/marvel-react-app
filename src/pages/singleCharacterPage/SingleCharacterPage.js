import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import PageFooter from '../../components/pageFooter/PageFooter';
import CharacterInfo from '../../components/characterInfo/CharacterInfo';
import ContentList from '../../components/contentList/ContentList';

function SingleCharacterPage() {
    return (
        <>
            <PageHeader></PageHeader>
            <PageContent>
                <ContentList></ContentList>
                <CharacterInfo></CharacterInfo>
            </PageContent>
            <PageFooter></PageFooter>
        </>
    );
}

export default SingleCharacterPage;