import React, {useState, useEffect} from 'react';
import './TopMovies.css';
import axios from 'axios';

const TopMovies = () => {
  const [movies,setmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fechdata();
  },[]);
  const fechdata=async () =>{
    try {
      const rp = await axios.get('http://localhost:1412/user/home/top');
      setmovies(rp.data);
      setLoading(false);
    } catch (error) {
      console.error(error.data);
    }
  }
  const handleaction=(id)=>{
    window.location.href = `/movie/detail/${id}`;
    }
  return (
    <div className="top-movies">
      <h2>Top Phim</h2>
      <div className="movie-list">
        <div className="movie-card_top">
        {movies.map((item, index)=>(
          <div className="movie-info" >
       
          <span className={`top${index+1}`}>TOP {index+1}</span>
            <h3 className='top_movie_link' onClick={() => handleaction(item.id)} >{item.vnname} </h3>

          </div>
       
        ))}
          
       
        </div>
       
      
      </div>
    </div>
  );
};

export default TopMovies;
