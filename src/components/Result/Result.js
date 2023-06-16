import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../helpers/axios'
import VideoCard from '../../components/VideoCard/VideoCard'
import "./Result.css"
import FlipMove from 'react-flip-move';

const Result = ({selectedOption}) => {

     const [movies, setMovies]= useState([]); 

     useEffect(()=>{
          const fetchData = async ()=>{
              const request = await axios.get(selectedOption)
              setMovies(request.data.results);
          }
          fetchData();

     },[selectedOption])
     console.log(movies)
  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie)=>(
             <VideoCard  key={movie.id} movie={movie}/>
        )
          
          )}
          </FlipMove>
    </div>
  )
}

export default Result
