import PropTypes from 'prop-types';
import { useFavourite } from "../../hooks/useFavouriteItem";
import CharacterCard from "../characterCard/CharacterCard";

import './favouritesItem.scss'

export function FavouritesItem(props) {
    const { id } = props;
    const favouriteInfo = useFavourite(id);

    return (
        <CharacterCard charInfo={favouriteInfo} className={'favourites'} />
    )
}

FavouritesItem.propTypes = {
    id: PropTypes.number
}