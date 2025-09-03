import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
 const currencyData = useCurrencyInfo("usd");
console.log("Currency Data in Component:", currencyData);
return(
  <h1>Hi</h1>
)
}

export default App;
