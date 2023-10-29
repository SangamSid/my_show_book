import React,{useState} from 'react'

const TimeBooking = ({slots,handleTime,activeTime}) => {
   
  return (
    <div className='flex flex-wrap m-2'>
    {
      slots.map((slot, index) => {
        return <p className={`border-2 border-solid m-2 p-2 border-red-500 rounded-md cursor-pointer ${index === activeTime ? "active" : "null"}`} onClick={(e) => handleTime(e, index)} key={index}>{slot}</p>
      })
    }
  </div>
  )
}

export default TimeBooking
