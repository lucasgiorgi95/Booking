import React, { useState } from 'react'
import './header.css'
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOption, setOpenOption] = useState(false)
      const [option, setOption] = useState({
        adult:1,
        children:0,
        room:1,
      })

      const handelOption =(name, operation)=>{
        setOption((prev)=>{
            return{
                ...prev,
                [name]: operation === "i"? option[name] +1 : option[name] -1
            }
        })
      }


  return (
    <div className='header'>
        <div className={type === "list"? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItems active">
                    <HotelIcon/>
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <AirplanemodeActiveIcon/>
                    <span>Flights</span>
                </div>
                <div className="headerListItems">
                    <CarRentalIcon/>
                    <span>Car rentals</span>
                </div>
                <div className="headerListItems">
                    <LocalHotelIcon/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItems">
                    <LocalTaxiIcon/>
                    <span>Airpot taxi</span>
                </div>
            </div>
          { type !== "list" &&
          <>
           <h1 className='headerTitle'> A lifetime of discounts? It`s Genius.</h1>
            <p className="headerDesc">
                Get rewarded for you travels - unlock instant savings of 10% or more with a free
                Giorgibooking account
            </p>
            <button className="headerBtn"> Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItems">
                    <HotelIcon className='headerIcon'/>
                    <input className='headerSearchInput' type="text" placeholder='Where are you going?' />
                </div>
                <div className="headerSearchItems">
                    <CalendarMonthIcon className='headerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                   {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                    />}
                </div>
                <div className="headerSearchItems">
                    <PersonIcon className='headerIcon'/>
                    <span  className='headerSearchText' onClick={()=>setOpenOption(!openOption)} >{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
                    {openOption && <div className="options">
                        <div className="optionsItem">
                            <span className="optiontext">Adult</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={option.adult <=1} 
                                    className="optionCounterButton"  
                                    onClick={()=>handelOption("adult", "d")}
                                > 
                                    - 
                                </button>
                                <span className="optionCounterNumber">{option.adult}</span>
                                <button
                                    className="optionCounterButton" 
                                    onClick={()=>handelOption("adult", "i")}
                                > 
                                + 
                                </button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optiontext">Children</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={option.children <=0}
                                    className="optionCounterButton" 
                                    onClick={()=>handelOption("children", "d")}
                                >
                                 - 
                                </button>
                                <span className="optionCounterNumber">{option.children}</span>
                                <button 
                                    className="optionCounterButton" 
                                    onClick={()=>handelOption("children", "i")}
                                >
                                + 
                                </button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optiontext">Room</span>
                            <div className="optionCounter">
                                <button 
                                    disabled={option.room <=1}
                                    className="optionCounterButton" 
                                    onClick={()=>handelOption("room", "d")}
                                > 
                                - 
                                </button>
                                <span className="optionCounterNumber">{option.room}</span>
                                <button 
                                    className="optionCounterButton" 
                                    onClick={()=>handelOption("room", "i")}
                                > 
                                + 
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItems">
                   <button className='headerBtn'>Search</button>
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header
