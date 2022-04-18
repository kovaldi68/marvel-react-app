// import { Component } from "react";
import ComicsCard from '../comicsCard/ComicsCard';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import './comicsList.scss';

function ComicsList() {
    return (
        <div className="page-content__comics-list comics-list">
            <ul className="comics-list__grid">
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
                <ComicsCard></ComicsCard>
            </ul>
            <LoadMoreButton></LoadMoreButton>
        </div>
    )
}

export default ComicsList;