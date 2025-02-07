import axios from "axios"
import { IData } from "../interface/IMovie"
import { appConfig } from "../config/app.config"
import { IMovieDetail } from "../interface/IMovieDetail";

export const getAllMovies = async () => {
  try {
    const res = await axios.get<IData>(`${appConfig.API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${appConfig.API_TOKEN}`
      }
    })
    return res.data
  } catch (error: any) {
    console.log(error)
  }
};

export const getMovieDetails = async (movie_id: number) => {
  try {
    const res = await axios.get<IMovieDetail>(`${appConfig.API_URL}/movie/${movie_id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${appConfig.API_TOKEN}`
      }
    })
    return res.data
  } catch (error: any) {
    console.log(error)
  }
};