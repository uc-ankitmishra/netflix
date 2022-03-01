import React, {useState, useEffect} from 'react'
import axios from "./axios"
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [props.fetchUrl])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row_posters">
                {movies.map(movie => 
                <img key={movie.id} className={`row_image && ${props.isLargeRow && "row_large"}`} src={base_url+(props.isLargeRow? movie.poster_path : movie.poster_path)} alt={movie.name}/>
                )}
            </div>
        </div>
    )
}

export default Row
