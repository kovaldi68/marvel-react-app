import LikeButton from '../likeButton/LikeButton';
import './comicsAbout.scss';


function ComicsAbout({ currentComic }){
    return (
        <div className="page-content__comics-about comics-about">
            <div className="comics-about__poster">
                <img className="comics-about__image" src="content/img/wonder-woman.jpg" alt="" width="320" height="420"/>
                <LikeButton class={'comics-about'}></LikeButton>
            </div>
            <div className="comics-about__descr">
                <a className="comics-about__link button button--back" href="">back to the list</a>
                <h2 className="comics-about__title">Comics Name</h2>
                <p className="comics-about__summary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <span className="comics-about__pages">144 pages</span>
                <span className="comics-about__language">Language: en-ru</span>
                <span className="comics-about__price">9.99$</span>
            </div>
        </div>
    )
}

export default ComicsAbout;