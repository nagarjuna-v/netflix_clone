import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryComponent = () => {
    const movies = useSelector(state => state.movies)
    console.log('movies', movies)
    return (
        <div className='-mt-64 relative z-20 bg-black w-full'>
            <MovieList title={"Now Playing"} playingMovies = {movies?.nowPlayingMovies}/>
            <MovieList title={"Popular Movies"} playingMovies = {movies?.popularMovies}/>
            <MovieList title={"Trending Movies"} playingMovies = {movies?.nowPlayingMovies}/>
            <MovieList title={"Telugu movies"} playingMovies = {movies?.nowPlayingMovies}/>
            <MovieList title={"English Movies"} playingMovies = {movies?.nowPlayingMovies}/>
            <MovieList title={"Now Playing"} playingMovies = {movies?.nowPlayingMovies}/>
        </div>
    );
}

export default SecondaryComponent;