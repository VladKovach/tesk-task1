import { useState } from 'react'
import './App.scss'
import LeftBar from './components/LeftBar/LeftBar'
import MainComponent from './components/MainComponent/MainComponent'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className='App'>
      <LeftBar menuActive={menuActive} setMenuActive={setMenuActive} />
      <MainComponent  menuActive={menuActive}/>
    </div>
  )
}

export default App
