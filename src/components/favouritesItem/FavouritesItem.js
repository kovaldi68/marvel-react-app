import { useFavourite } from "../../hooks/useFavouriteItem";
import CharacterCard from "../characterCard/CharacterCard";

import './favouritesItem.scss'

export function FavouritesItem(props) {
    const { id } = props;
    const cusHook = useFavourite(id);

    return (
        <CharacterCard charInfo={cusHook} className={'favourites'} />
    )
}