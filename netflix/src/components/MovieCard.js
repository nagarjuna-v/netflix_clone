import React from 'react';
import { Image_URL } from './Constants';

const MovieCard = ({posterPath}) => {
    return (
        <div className='w-32 mr-2'>
           <img alt="Movie Card" src={Image_URL + posterPath} /> 
        </div>
    );
}

export default MovieCard;