import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {


  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currrencyInfo = useCurrencyInfo(fromCurrency);


  const Options = Object.keys(currrencyInfo);


  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


   
  const convert = () => {

    if (!amount || isNaN(amount)) {
      setConvertedAmount(amount * currrencyInfo[toCurrency]);
    }
  }


  return (
    <>
      <h1 className='bg-amber-600 text-3xl'>RateMate</h1>
      <h2 className='text-2xl'>Your Personal Rate Tracker</h2>
    </>
  )
}

export default App
