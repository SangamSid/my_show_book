import React, { useEffect, useState,useCallback } from 'react'
import { moviesList, slots, seats } from '../data';
import axios from "axios"
import LastBookingDetail from './LastBookingDetail';
import MovieBooking from './MovieBooking';
import TimeBooking from './TimeBooking';
import SeatBooking from './SeatBooking';
import Toast from './Toast';



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
  const [error,setError]=useState("")
  const [toast,setToast]=useState(false);



  useEffect(() => {
    const movieLocalData = window.localStorage.getItem("movieName");
    const timeLocalData=window.localStorage.getItem("timeSlot");
    const seatLocalData=window.localStorage.getItem("selectedSeat");
    if( movieLocalData){
        setMovie(JSON.parse(movieLocalData).movie)
        setActive(JSON.parse(movieLocalData).index)
    }
    if(timeLocalData){
      setTime(JSON.parse(timeLocalData).time)
      setActiveTime(JSON.parse(timeLocalData).index)
    }
    if(seatLocalData){
      setSeating(JSON.parse(seatLocalData).seat)
      setActiveSeat(JSON.parse(seatLocalData).index)
    }

  }, []);

  const fetchData = async () => {
    try{
      const datas = await axios.get("/api/booking")

      const res = await datas.data
      if (res) {
        setLastData(res);
      }
    }
    catch(err){
      setError("not able to fetch data...")
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
    setMovie(e.target.innerText);
    window.localStorage.setItem("movieName",JSON.stringify({movie:e.target.innerText,index:index}))
  }

  const handleTime = (e, index) => {
    setActiveTime(index)
    setTime(e.target.innerText)
    window.localStorage.setItem("timeSlot",JSON.stringify({time:e.target.innerText,index:index}))
  }

  const handleSeat=(e,index)=>{
   setActiveSeat(index);
   window.localStorage.setItem("selectedSeat",JSON.stringify({seat:e.target.innerText,index:index}))
  }

  const handleSubmit = async () => {
    const { A1, A2, A3, A4, D1, D2 } = seating
    if (!movie) {
      return alert("Please Select a movie ");
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
      window.localStorage.setItem("movieticket",JSON.stringify({ movie: movie, slot: time, seats: seating}))
      await fetchData();
      setToast(true);
      setTimeout(()=>{
        setToast(false)
    },2000)
      setActive(null)
      setActiveSeat(null);
      setActiveTime(null);
      setSeating(initialSeat);
      window.localStorage.clear();
    
      
    }
    catch (err) {
      return alert("sorry for inconvnience, Your ticked has not booked, please try again")
    }
  }
  return (
    <div className=' flex items-center justify-center'>
      <div className='border-2 border-solid mt-5 p-5 w-[90%] shadow-md rounded-md'>
      {
    toast && <Toast fn={()=>setToast(false)} toastClass={!toast ? "-translate-y-96": "translate-y-0"}/>
  }
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

              <SeatBooking seating={seating} activeSeat={activeSeat} setActiveSeat={setActiveSeat} setSeating={setSeating} handleSeat={handleSeat} />
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
