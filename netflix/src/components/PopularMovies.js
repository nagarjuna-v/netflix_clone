import { useEffect } from 'react';
import { API_CONSTANTS } from './Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const PopularMovies = () => {
    const dispatch = useDispatch()

    const getPopularMoviesList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_CONSTANTS)
        const json = await data.json()
        console.log(json)
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMoviesList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

}

export default PopularMovies;