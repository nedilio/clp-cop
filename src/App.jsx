import { useState, useEffect } from "react";
import "./App.css";
import { getCurrency } from "./services";

function App() {
  const [precioCLP, setPrecioCLP] = useState(0);
  const [precioUSD, setPrecioUSD] = useState(0);
  const [rate, setRate] = useState(0);

  const roudedNumber = (number) => {
    return Math.ceil(number);
  };

  const handleOnChange = (e) => {
    const precioCOP = e.target.value.replace(",", ".");
    setPrecioCLP(roudedNumber(precioCOP * rate.CLP));
    setPrecioUSD((precioCOP * rate.USD).toFixed(2));
  };

  useEffect(() => {
    getCurrency("COP").then((res) => setRate(res));
  }, []);

  return (
    <div className="App">
      <label htmlFor="precio">Precio COP</label>
      <input
        type="text"
        min="0"
        inputMode="decimal"
        id="precio"
        name="precio"
        pattern="^[0-9]+"
        onChange={handleOnChange}
      />
      <p>USD = {precioUSD}</p>
      <p>CLP = {precioCLP}</p>

      {rate && <p>1usd = {roudedNumber(1 / rate.USD)} COP</p>}
    </div>
  );
}

export default App;
