import React from 'react'
import styles from './Movie.module.css'

export default function Movie(props) {
  return (
    <li className={styles.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
    </li>
  )
}
