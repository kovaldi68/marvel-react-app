import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Marvel from '../services/marvelApi';

export function useMarvelItem(unitName) {
    const [unit, setUnit] = useState({});

    const { id } = useParams();

    const method = `get${unitName}`

    useEffect(() => {
        const getData = new Marvel();

        getData[method](id)
            .then(setUnit);
    }, [id, method]);
 
    return unit;
}