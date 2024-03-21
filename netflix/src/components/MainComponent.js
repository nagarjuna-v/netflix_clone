import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainComponent = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    
    if(!movies) return null

    const mainMovie =  movies[0] 
    return (
        <>
            <VideoTitle title = {mainMovie}/>
            <VideoBackGround movieId = {mainMovie?.id}/>
        </>
    );
}

export default MainComponent;