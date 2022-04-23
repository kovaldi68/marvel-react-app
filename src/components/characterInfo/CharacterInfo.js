import LikeButton from '../likeButton/LikeButton';
import './characterInfo.scss';

function CharacterInfo() {
    return (
        <div className="page-content__character-info character-info">
            <div className="character-info__poster">
                <img className="character-info__image" src="content/img/wonder-woman.jpg" alt="" width="320" height="420"/>
                <LikeButton class="character-info__like"></LikeButton>
            </div>
            <div className="character-info__descr">
                <a className="character-info__link button button--back" href="">back to the list</a>
                <h2 className="character-info__title">Comics Name</h2>
                <p className="character-info__bio">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <ul className="character-info__comics-list">Comics:
                    <li className="character-info__comics-item">
                        <a href="">All-Winners Squad: Band of Heroes (2011) #3</a>
                    </li>
                    <li className="character-info__comics-item">
                        <a href="">All-Winners Squad: Band of Heroes (2011) #3</a>
                    </li>
                    <li className="character-info__comics-item">
                        <a href="">All-Winners Squad: Band of Heroes (2011) #3</a>
                    </li>
                    <li className="character-info__comics-item">
                        <a href="">All-Winners Squad: Band of Heroes (2011) #3</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterInfo;