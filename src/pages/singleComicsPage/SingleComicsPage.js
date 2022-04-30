import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom";
import { AppRoutes } from '../../const';
import LikeButton from '../../components/likeButton/LikeButton';
import Marvel from '../../services/marvelApi';

import './SingleComicsPage.scss';

function SingleComicsPage() {
    const [comic, setComic] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const getData = new Marvel();

        getData.getComic(id)
        .then(setComic);
    }, [id]);

    return (
        <div className="page-content__comics-about comics-about">
            <div className="comics-about__poster">
                <img className="comics-about__image" src={comic.thumbnail} alt="" width="320" height="420"/>
                <LikeButton class={'comics-about'}></LikeButton>
            </div>
            <div className="comics-about__descr">
                <Link className="comics-about__link button button--back" to={AppRoutes.MainComics}>back to the list</Link>
                <h2 className="comics-about__title">{comic.title}</h2>
                <p className="comics-about__summary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <span className="comics-about__pages">{comic.pageCount} pages</span>
                <span className="comics-about__language">Language: en-ru</span>
                <span className="comics-about__price">Price: {comic.price}$</span>
            </div>
        </div>
    )
}

export default SingleComicsPage;