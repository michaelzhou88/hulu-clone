import React, { useState, useEffect } from 'react'
import "./Results.css";
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from "react-flip-move";

// Function to display customised results
function Results({ selectedOption }) {
    // Declaration of movies array in state
    const [movies, setMovies] = useState([]);

        // run this code EVERY time when the Results component loads/mounts
        useEffect(() => {
            // async function is used to handle delays while data fetching of movies
            async function fetchData() {
                const request = await axios.get(selectedOption);
                // console.log(request);
                setMovies(request.data.results);
                return request;
            }

            fetchData();
        }, [selectedOption]);    // selectedOption is what this function is dependent on

    return (
        <div className="results">
            <FlipMove>
                {/* Iterate through every movie item in the movies array and pass the movie as a prop */}
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
            
            
        </div>
    )
}

export default Results
