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
    if (amount && !isNaN(amount)) {
      setConvertedAmount(amount * currrencyInfo[toCurrency]);
    }
  }

  return (
    <div claass = "box"
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "0",
        position: "fixed",
        top: "0",
        left: "0"
      }}
    >
      <h1 style={{
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      }}>
        Rate Mate
      </h1>
      
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={Options}
              onCurrencyChange={(currency) => {
                setAmount(amount)
              }}
            />
          </div>
          
          <div className="relative w-full h-0.5">
            <button
              type="button"
              onClick={swapCurrencies}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              swap
            </button>
          </div>
          
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={Options}
              onCurrencyChange={(currency) => {
               setTo(currency)}
              }
              selectCurrency={fromCurrency}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {
              fromCurrency.toUpperCase()
            } to {toCurrency.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App