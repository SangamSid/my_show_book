import React,{useState} from 'react'

const MovieBooking = ({moviesList,handleMovie,active}) => {

  return (
    <div className='flex flex-wrap m-2'>
    {
      moviesList.map((movie, index) => {
        return <p className={`border-2 border-solid m-2 p-2 border-red-500 rounded-md cursor-pointer ${index === active ? "active" : "null"}`} onClick={(e) => handleMovie(e, index)} key={index}>{movie}</p>
      })
    }
  </div>
  )
}

export default MovieBooking
