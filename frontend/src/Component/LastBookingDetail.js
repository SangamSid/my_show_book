import React from 'react'

const LastBookingDetail = ({lastData}) => {
  return (
    <div className='border-2 border-solid w-50 rounded-md'>
    <h2 className='p-2 text-xl font-medium text-violet-500'>Last Booking Details</h2>
    {
      
lastData.length > 0 ? (
    <div className='flex flex-col m-2'>
      <p className='font-bold'>Seats</p>
      <span>A1:{lastData[0].seats.A1}</span>
      <span>A2:{lastData[0].seats.A2}</span>
      <span>A3:{lastData[0].seats.A3}</span>
      <span>A4:{lastData[0].seats.A4}</span>
      <span>D1:{lastData[0].seats.D1}</span>
      <span>D2:{lastData[0].seats.D2}</span>

      <div className='flex'>
        <p className='font-bold'>time:</p>
        <span className='ml-3'>{lastData[0].slot}</span>
      </div>

      <div className='flex'>
        <p className='font-bold'>Movie:</p>
        <span className='ml-3'>{lastData[0].movie}</span>
      </div>


    </div>
  ) : (
    <div> "No last booking"</div>)
    }
  </div>
  )
}

export default LastBookingDetail
