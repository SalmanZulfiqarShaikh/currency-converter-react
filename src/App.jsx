import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {


  const [amount, setAmount] = useState(1);


  return (
    <>
      <h1 className='bg-amber-600 text-3xl'>RateMate</h1>
      <h2 className='text-2xl'>Your Personal Rate Tracker</h2>
    </>
  )
}

export default App
