import React from 'react';
import Header from './Header';
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import PopularMovies from './PopularMovies';
import NowPlayingMovies from './NowPlayingMovies';

const Browse = () => {
PopularMovies()
NowPlayingMovies()

    return (
        <>
            <Header />
            <MainComponent />
            <SecondaryComponent />
        </>
    );
}

export default Browse;