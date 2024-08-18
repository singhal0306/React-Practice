import React from 'react'
import Movie from './Movie'
import styles from "./MoviesList.module.css"

export default function MoviesList(props) {
  return (
    <ul className={styles.movieList}>
        {props.movies.map((movie)=>{
          return <Movie
            key= {movie.id}
            title = {movie.title}
            releaseDate = {movie.releaseDate}
            openingText = {movie.openingText}
          />
        })}
    </ul>
  )
}
