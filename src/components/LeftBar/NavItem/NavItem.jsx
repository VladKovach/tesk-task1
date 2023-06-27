import React, { useState } from 'react'
import GetSvg from '../../GetSvg/GetSvg'

const NavItem = ({ svg, name, hasArrow = true }) => {
  const [color, setColor] = useState('#9197B3')
  return (
    <li
      onMouseOver={() => setColor('white')}
      onMouseOut={() => setColor('#9197B3')}
      className='nav-list__item '
    >
      <div className='nav-list__item-logo'>
        <GetSvg svg={svg} color={color} name={name} />
      </div>
      <p className='nav-list__item-header'>{name}</p>
      {hasArrow ? (
        <div className='nav-list__item-arrow'>
          <GetSvg color={color} svg={'arrow-right'} />
        </div>
      ) : null}
    </li>
  )
}

export default NavItem
