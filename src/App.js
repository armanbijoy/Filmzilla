import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'

//34a2a594

const API_URL = 'http://www.omdbapi.com?apikey=34a2a594'

const App = ()=>{
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovies = async (title)=>{
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()
        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return(
        <div className="app">
            <h1>Fimzilla</h1>

            <div className="search">
                <input placeholder="Search For movies" value={searchTerm} onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}/>
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
            </div>

        {
            movies.length >0 
            ? (
                <div className="container">
                {movies.map((movie)=>{
                   return <MovieCard movie = {movie}/>
                })}
            </div>
            )
            :(
                <div className="empty">
                    No Movies Found
                    </div>
            )
            

        }



            
        </div>
    );

}

export default App