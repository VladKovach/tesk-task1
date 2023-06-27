import React from 'react'
import NavItemsList from './NavItemsList/NavItemsList'
import './leftBar.scss'
import GetSvg from '../GetSvg/GetSvg'

const LeftBar = ({ menuActive, setMenuActive }) => {
  return (
    <div className='left-bar__wrapper'>
      <div className='left-bar'>
        <div className='left-bar__header '>
          <div className='left-bar__header-logo'>
            <GetSvg svg={'headerLogo'} />
          </div>
          <div className='left-bar__header-name'>
            <h4>Dashboard</h4>
            <p>v.01</p>
          </div>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={menuActive ? 'left-bar__nav-arrow active' : 'left-bar__nav-arrow'}
        >
          <span
            onClick={(e) => {
              e.stopPropagation()
              setMenuActive(!menuActive)
              console.log(e.target)
            }}
            className='left-bar__nav-arrow__svg'
          >
            <GetSvg svg={'btn-arrow'} />
          </span>
        </div>
        <NavItemsList menuActive={menuActive} />

        <div onClick={(e) => e.stopPropagation()} className='left-bar__user-header'>
          <div className='left-bar__user-header__logo '>
            <img src='/images/userFoto.png' alt='' />
          </div>
          <div className='left-bar__user-header__info'>
            <div className='left-bar__user-header__info-name'>Evano</div>
            <div className='left-bar__user-header__info-position'>Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
