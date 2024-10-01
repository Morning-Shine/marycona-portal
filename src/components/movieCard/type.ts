import { TMovie } from "types/movie"


export type TMovieCard={
    movieInfo: Omit<TMovie, 'id'>
}