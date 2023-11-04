import React from 'react'
import { seats } from '../data'

const SeatBooking = ({seating,setSeating,activeSeat,handleSeat}) => {

  return (
    <div className='flex flex-wrap m-2'>
                {
                  seats.map((seat,index) => {
                    return (
                      <div className={`flex flex-col border-red-500 border-2 border-solid p-1 justify-center items-center mr-6 w-30 rounded-md cursor-pointer ${index === activeSeat ? "active" : "null"}`}
                        onClick={(e)=>handleSeat(e,index)} key={index} >
                        <p >{seat}</p>
                        <input type='number' className='w-10 mt-1 border-2 border-solid'
                          placeholder='0'
                          min="0"
                          max="30"
                          name={seat}
                          value={seating[seat]}
                          onChange={(e) => setSeating({ ...seating, [e.target.name]: Number(e.target.value) })} />
                      </div>
                    )
                  })
                }
              </div>
  )
}

export default SeatBooking
