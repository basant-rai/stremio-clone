import { useEffect, useState } from "react"

import MovieList from "../movie-list/movie-list";
import { getAllMovies } from "../../Api/movie-api";

import { IMovie } from "../../interface/IMovie";

interface Props {
  setMovieId: (id: number) => void,
  movieId: number | null,
}

const AllMovies = ({ setMovieId, movieId }: Props) => {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    getAllMovies()
      .then((res) => res && setMovies(res?.results))
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className="p-5">
      <MovieList
        movieId={movieId}
        movies={movies}
        setMovieId={setMovieId}
      />
    </div>
  )
}

export default AllMovies
