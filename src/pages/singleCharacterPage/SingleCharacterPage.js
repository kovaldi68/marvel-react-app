import { CharacterInfo } from '../../components/characterInfo/CharacterInfo';
import { useParams } from 'react-router-dom';
import { useFavourite } from '../../hooks/useFavouriteItem';

import './singleCharacterPage.scss';

export function SingleCharacterPage() {
    const { id } = useParams();
    const singleItem = useFavourite(id);

    return (
        <CharacterInfo charInfo={singleItem}></CharacterInfo>
    )
}