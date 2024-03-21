import { useEffect } from 'react';
import { API_CONSTANTS } from './Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const NowPlayingMovies = () => {
const dispatch = useDispatch()
    const getNowPlayingMoviesList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANTS)
        const json = await data.json()
        console.log(json)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMoviesList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default NowPlayingMovies;