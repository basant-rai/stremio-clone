import { useEffect, useState } from 'react'
import { getMovieDetails } from '../../Api/movie-api';
import { IMovieDetail } from '../../interface/IMovieDetail';

interface Props {
  movieId: number
}

const MovieDetail = ({ movieId }: Props) => {
  const [detail, setDetail] = useState<IMovieDetail>();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error))
  }, [movieId]);

  return (
    <div className=''>
      <p>{detail?.title}</p>
    </div>
  )
}

export default MovieDetail