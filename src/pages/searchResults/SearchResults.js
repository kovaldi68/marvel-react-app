import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { Loading } from "../../components/loading/Loading";
import Marvel from "../../services/marvelApi";

export function SearchResults() {
    const getData = new Marvel();
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const searchName = searchParams.get('nameStartsWith') || '';

    useEffect(() => {
        getData.getCharactersbyName(searchName)
            .then(res => {
                setResult(res);
                setIsLoading(false);
            });
    })

    let content;
        
    isLoading ? 
    (content = <Loading/>) : 
    (result.length === 0) ? 
    (content = <div>Sorry, we didn't find anything here. Try another request!</div>) : 
    (content = <ul className='character-list__grid'>
                {result.map(item => 
                    <CharacterCard key={item.id} charInfo={item} className={'character-list'}/>
                )}
              </ul>);

    return (
        <div className="page-content__character-list character-list">
            {content}
        </div>
    )
}