import ContentList from "../../components/contentList/ContentList";
import LikeButton from "../../components/likeButton/LikeButton";

import './favourites.scss';

export function Favourites() {
    return (
        <div className="page-content__favourites favourites">
            <h2 className="favourites__title">Your Favourites:</h2>
            <ContentList />
            <ul className="favourites__list">
                {/* <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites`}/>
                    </div>
                </li>
                <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites`}/>
                    </div>
                </li>
                <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites`}/>
                    </div>
                </li>
                <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites`}/>
                    </div>
                </li>
                <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites__like`}/>
                    </div>
                </li>
                <li className={`favourites__item`}>
                    <div className={`favourites__poster`}>
                        <img className={`favourites__image`} src="" alt="" width="225" height="310"/>
                        <LikeButton className={`favourites__like`}/>
                    </div>
                </li> */}
                {/* <CharacterCard className={'favourites'}/> */}
            </ul>
        </div>
        
    )
}