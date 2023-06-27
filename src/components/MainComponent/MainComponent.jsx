import React from 'react'
import './mainComponent.scss'
import NavBar from '../NavBar/NavBar'
import GetSvg from '../GetSvg/GetSvg'
import HelloEvano from '../HelloEvano/HelloEvano'
import customersData from '../../customersData/customersData'
import CustomersList from '../CustomersList/CustomersList'
const MainComponent = ({ menuActive }) => {
  return (
    <div className='main-compnt__wrapper'>
      <div className='main-compnt'>
        <div className='main-compnt__header'>
          <HelloEvano />
        </div>
        <div
          className={
            menuActive ? 'main-compnt__customers-section active' : 'main-compnt__customers-section'
          }
        >
          <div className='main-compnt__customers-section__header'>
            <div className='main-compnt__customers-section__header-info'>
              <h3>All Customers</h3>
              <p>Active Members</p>
            </div>
            <form className='main-compnt__customers-section__header-form form'>
              <label htmlFor='search-user'>
                <GetSvg svg={'search'} />
              </label>
              <input placeholder={'Search'} type='text' name='search-user' id='' />
            </form>
          </div>
          <div className='main-compnt__customers-section__list-wrapper list'>
            <div className='list-titles'>
              <p className='list-titles__name'>Customer Name</p>
              <p className='list-titles__company'>Company</p>
              <p className='list-titles__phone'>Phone Number</p>
              <p className='list-titles__email'>Email</p>
              <p className='list-titles__country'>Country</p>
              <p className='list-titles__status'>Status</p>
            </div>
            <span className='list-upperline'></span>

            <div className='list-items '>
              <CustomersList data={customersData} />
            </div>

            <div className='main-compnt__customers-section__nav-section '>
              <p className='main-compnt__customers-section__nav-section__showing-data '>
                Showing data 1 to 8 of 256K entries
              </p>
              <div className='main-compnt__customers-section__nav-section__nav-bar '>
                <NavBar data={customersData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent
