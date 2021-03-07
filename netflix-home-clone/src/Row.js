import axios from './axios';
import React, {useState, useEffect } from 'react';
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL= "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchurl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl]= useState("");
    
    useEffect(() => {
       // if [], run once when the row loads, and don't run again 
    async function fetchData() {
        const request = await axios.get(fetchurl);
        console.log(request);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
       
    }, [fetchurl]);

    const opts ={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
 
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name+ "Trailer" || "")
            .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error));
        }
    }
    return (
        <div className="row">
            <h2 className="rowname">{title}</h2>
            <div className="rowPosters">
                {/* row posters */}
                {movies.map( movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                     className={`rowposter ${isLargeRow && "rowposterLarge"}`} 
                     src={`${baseURL}${isLargeRow? movie.poster_path: movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
            <div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
            </div>
    )
}

export default Row
