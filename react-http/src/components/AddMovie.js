import React, {useRef} from 'react'
import styles from "./AddMovie.module.css"

export default function AddMovie(props) {
    const titleRef = useRef("");
    const openingTextRef = useRef("");
    const releaseDateRef = useRef("");
    
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value
        };
        props.onAddMovie(movie);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input type="text" ref={titleRef} id="title" />
        </div>
        <div className={styles.control}>
            <label htmlFor="opening-text">Opening Text</label>
            <textarea rows="5" ref={openingTextRef} id="opening-text" />
        </div>
        <div className={styles.control}>
            <label htmlFor="date">Release Date</label>
            <input type="text" ref={releaseDateRef} id="date" />
        </div>
        <button>Add Movie</button>
    </form>
  )
}

