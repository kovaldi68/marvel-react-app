import { useState, useEffect } from 'react';
import Marvel from '../services/marvelApi';

export function useFavourite(id) {
    const [unit, setUnit] = useState(0);

    useEffect(() => {
        const getData = new Marvel();

        getData.getCharacter(id)
            .then(setUnit);
    }, [id]);

    return unit;
}