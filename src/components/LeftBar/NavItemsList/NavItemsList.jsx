import React from 'react'
import NavItem from '../NavItem/NavItem'
import './navItemsList.scss'
const NavItemsList = ({ menuActive }) => {
  return (
    <div className={menuActive ? 'nav-list__wraper active' : 'nav-list__wraper'}>
      <ul className='nav-list'>
        <NavItem svg={'key'} name={'Dashboard'} hasArrow={false} />
        <NavItem svg={'cube'} name={'Product'} />
        <NavItem svg={'user'} name={'Customers'} />
        <NavItem svg={'wallet'} name={'Income'} />
        <NavItem svg={'discountLogo'} name={'Promote'} />
        <NavItem svg={'help'} name={'Help'} />
      </ul>
    </div>
  )
}

export default NavItemsList
