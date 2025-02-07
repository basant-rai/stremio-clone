import React from 'react'
import { IMovie } from '../../interface/IMovie'

interface Props {
  movie: IMovie
}

const MovieCard = ({ movie }: Props) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"
  return (
    <div className='w-full group'>
      <div className='h-80 w-full'>
        <img
          src={`${IMAGE_URL}/${movie.poster_path}`}
          alt=""
          className='object-cover h-full w-full rounded-lg group-hover:ring ring-white'
        />
      </div>
      <p className='font-bold text-sm mt-4 text-white line-clamp-2'>{movie.title}</p>
    </div>
  )
}

export default MovieCard