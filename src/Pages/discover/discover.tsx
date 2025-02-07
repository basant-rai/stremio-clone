import  { useState } from 'react';

import AllMovies from '../../component/Movies/all-movies'
import MovieDetail from '../../component/Movies-Details/movie-detail'

const DiscoverPage = () => {
  const [movieId, setMovieId] = useState<number | null>(null);

  return (
    <div className='flex '>
      <AllMovies setMovieId={setMovieId} movieId={movieId} />

      <div className='w-[500px] shrink-0 bg-white'>
        {
          movieId &&
          <MovieDetail movieId={movieId} />
        }
      </div>
    </div>
  )
}

export default DiscoverPage