import React from 'react'
import './navBar.scss'
import GetSvg from '../GetSvg/GetSvg'

const NavBar = ({ data }) => {
  return (
    <div className='nav-bar'>
      <button className='nav-bar__btn'>
        <GetSvg svg={'btn-arrow'} />
      </button>
      <button className='nav-bar__btn'>1</button>
      <button className='nav-bar__btn'>2</button>
      <button className='nav-bar__btn'>3</button>
      <button className='nav-bar__btn'>4</button>
      <button className='nav-bar__btn spread__btn'>...</button>
      <button className='nav-bar__btn'>40</button>
      <button className='nav-bar__btn right'>
        <GetSvg svg={'btn-arrow'} />
      </button>
    </div>
  )
}

export default NavBar
