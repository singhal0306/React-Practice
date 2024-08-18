import React, { useState, useEffect, useCallback } from 'react'
import MoviesList from "./components/MoviesList"
import AddMovie from './components/AddMovie';
import "./App.css"


export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const respone = await fetch("https://first-react-9d19d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json")
      if (!respone.ok) {
        throw new Error('Something went wrong')
      }

      const data = await respone.json();

      const loadedMovie = [];
      for (const key in data){
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      setMovies(loadedMovie);
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])

  let content = <p>Found no movies.</p>
  if(movies.length >0){
    content = <MoviesList movies={movies} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }

  async function addMovieHandler(movie) {
    // console.log(movie)
    const response = await fetch("https://first-react-9d19d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie= {addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  )
}

