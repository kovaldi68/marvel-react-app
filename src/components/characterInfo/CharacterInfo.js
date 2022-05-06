import { NavLink as Link } from "react-router-dom";
import { LikeButton } from "../likeButton/LikeButton";
import { AppRoutes } from "../../const";
import { Loading } from "../loading/Loading";

export function CharacterInfo({ charInfo}) {
    return (
        <div className="page-content__character-info character-info">
            <div className="character-info__poster">
                <img className="character-info__image" src={charInfo.thumbnail} alt={charInfo.name} width="320" height="420"/>
                <LikeButton className={'character-info__like'} id={charInfo.id}/>
            </div>
            <div className="character-info__descr">
                <Link className="character-info__link button button--back" to={AppRoutes.Main}>back to the list</Link>
                <h2 className="character-info__title">{charInfo.name}</h2>
                <p className="character-info__bio">{charInfo.description ? charInfo.description : 'No description yet'}</p>
                <ul className="character-info__comics-list">Comics:
                    {charInfo.comics ? 
                    charInfo.comics.map((item,index) => {
                        if (index > 10) return false;                      
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    })
                    : <Loading />}
                </ul>
            </div>
        </div>
    );
}