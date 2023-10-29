import React, { useEffect, useState } from 'react'
import { moviesList, slots, seats } from '../data';
import axios from "axios"
import LastBookingDetail from './LastBookingDetail';
import MovieBooking from './MovieBooking';
import TimeBooking from './TimeBooking';
import SeatBooking from './SeatBooking';

const Main = () => {
  let initialSeat = {
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0
  }

  const [lastData, setLastData] = useState([])
  const [activeTime, setActiveTime] = useState(null)
  const [active, setActive] = useState(null)
  const [activeSeat, setActiveSeat] = useState(null)
  const [movie, setMovie] = useState("");
  const [time, setTime] = useState("");
  const [seating, setSeating] = useState(initialSeat)

  const fetchData = async () => {
    const datas = await axios.get("/api/booking")
    const res = await datas.data
    if (res) {
      setLastData(res);
    }
  };

  useEffect(() => {
    const fetchLastData = async () => {
      const result = await fetchData();
      console.log(result);
    }
    fetchLastData();
  }, []);


  const handleMovie = (e, index) => {
    setActive(index)
    setMovie(e.target.innerText)
  }

  const handleTime = (e, index) => {
    setActiveTime(index)
    setTime(e.target.innerText)
  }

  const handleSubmit = async () => {
    const { A1, A2, A3, A4, D1, D2 } = seating
    if (!movie) {
      return alert("Please Select a movie");
    }
    if (!time) {
      return alert("Please Select a time slot");
    }
    if (A1 === 0 && A2 === 0 && A3 === 0 && A4 === 0 && D1 === 0 && D2 === 0) {
      return alert("Please Select Atleast one seat");
    }
    try {
      const data = await axios.post("/api/booking", { movie: movie, slot: time, seats: seating })
      setLastData(data);
      alert("your show booked successfully ")
      await fetchData();
      setActive(null)
      setActiveSeat(null);
      setActiveTime(null);
      setSeating(initialSeat);
    }
    catch (err) {
      return alert("sorry for inconvnience, Your ticked has not booked, please try again")
    }
  }
  return (
    <div className=' flex items-center justify-center'>
      <div className='border-2 border-solid mt-5 p-5 w-[90%] shadow-md rounded-md'>
        <h1 className='font-bold text-xl text-teal-700'>Book that Show !!</h1>

        <div className='flex gap-4'>
          <div className='flex flex-col'>

            <div className='border-2 mt-2 border-solid rounded-md'>
              <h3 className='m-2 font-bold text-xl text-violet-500'>Select a Movie</h3>

              <MovieBooking moviesList={moviesList} handleMovie={handleMovie} active={active}/>
            </div>

            <div className='border-2 mt-2 border-solid rounded-md'>
              <h3 className='m-2 font-bold text-xl text-violet-500'>Select a Time Slot</h3>

              <TimeBooking slots={slots} activeTime={activeTime} handleTime={handleTime}/>
            </div>

            <div className='border-2 mt-2 border-solid rounded-md'>
              <h3 className='m-2 font-bold text-xl text-violet-500'>Select the Seats</h3>

              <SeatBooking seating={seating} activeSeat={activeSeat} setActiveSeat={setActiveSeat} setSeating={setSeating}/>
            </div>

            <div className='mt-2 font-bold'>
              <button className='bg-teal-500 w-30 p-2 rounded-md mt-2' onClick={handleSubmit}>Book Now</button>
            </div>

          </div>
          <LastBookingDetail lastData={lastData}/>
        </div>

      </div>



    </div>
  )
}

export default Main
