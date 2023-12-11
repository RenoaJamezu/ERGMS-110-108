import './App.css'
import { Farminfo } from './components/Modal/FarmInfo'
import { Mobileinfo } from './components/Modal/Mobileinfo'
import { Promotioninfo } from './components/Modal/Promotioninfo'
import { Stallinfo } from './components/Modal/Stallinfo'
import { Mainpage } from "./pages/Mainpage"

function App() {

  return (
    <>
      <Mainpage />
      <Farminfo />
      <Stallinfo />
      <Mobileinfo />
      <Promotioninfo />
    </>
  )
}

export default App
