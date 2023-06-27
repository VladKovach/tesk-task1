import React, { useEffect, useState } from 'react'
import './customersList.scss'
import GetSvg from '../GetSvg/GetSvg'
const CustomersList = ({ data }) => {
  const [windowWidth, setWindowInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    function windowWidthResizeHandler() {
      setWindowInnerWidth(window.innerWidth)
    }
    window.addEventListener('resize', windowWidthResizeHandler)
  })
  const [activeBtns, setActiveBtns] = useState(Array(8).fill(true))
  const newList = data.map((user, index) => {
    return (
      <div key={index} className='customers-list__item '>
        <li className='customers-list__item-li '>
          <p className='customers-list__item-li__name'>{user.name}</p>
          <p className='customers-list__item-li__company'>{user.company}</p>
          <p className='customers-list__item-li__phone'>{user.phone}</p>
          <p className='customers-list__item-li__email'>{user.email}</p>
          <p className='customers-list__item-li__country'>{user.country}</p>

          {windowWidth <= 655 ? (
            activeBtns[index] ? (
              <div
                onClick={() => {
                  const newBtnsState = [...activeBtns]
                  if (activeBtns[index]) {
                    newBtnsState[index] = false
                    setActiveBtns(newBtnsState)
                  } else if (!activeBtns[index]) {
                    newBtnsState[index] = true
                    setActiveBtns(newBtnsState)
                  }
                }}
                className='customers-list__item-li__status checkbox '
              >
                <GetSvg svg={'checked'} />
              </div>
            ) : (
              <div
                onClick={() => {
                  const newBtnsState = [...activeBtns]
                  if (activeBtns[index]) {
                    newBtnsState[index] = false
                    setActiveBtns(newBtnsState)
                  } else if (!activeBtns[index]) {
                    newBtnsState[index] = true
                    setActiveBtns(newBtnsState)
                  }
                }}
                className='customers-list__item-li__status checkbox '
              >
                <GetSvg svg={'unchecked'} />
              </div>
            )
          ) : (
            <button
              onClick={() => {
                const newBtnsState = [...activeBtns]
                if (activeBtns[index]) {
                  newBtnsState[index] = false
                  setActiveBtns(newBtnsState)
                } else if (!activeBtns[index]) {
                  newBtnsState[index] = true
                  setActiveBtns(newBtnsState)
                }
              }}
              className={`customers-list__item-li__status button ${
                activeBtns[index] ? 'active' : 'inactive'
              }`}
            >
              {activeBtns[index] ? 'Active' : 'Inactive'}
            </button>
          )}
        </li>
      </div>
    )
  })
  return <ul className='customers-list'>{newList}</ul>
}

export default CustomersList
