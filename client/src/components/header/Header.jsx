import React from 'react'
import './header.css'
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
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
            <h1 className='headerTitle'> A lifetime of discounts? It`s Genius.</h1>
            <p className="headerDesc">
                Get rewarded for you travels - unlock instant savings of 10% or more with a free
                Giorgibooking account
            </p>
            <button className="headerBtn"> Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header
