import { IMovie } from '../../interface/IMovie'
import MovieCard from '../common/card'

interface Props {
  movies: IMovie[]
  movieId: number | null
  setMovieId: (id: number) => void
}

const MovieList = ({ movies, setMovieId }: Props) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-7 gap-8'>
      {
        movies.map((movie, idx) => (
          <div key={idx} onClick={() => setMovieId(movie.id)}>
            <MovieCard movie={movie} />
          </div>
        ))
      }
    </div>
  )
}

export default MovieList