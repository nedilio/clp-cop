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
      <div className="form">
        <label htmlFor="precio">Precio π¨π΄</label>
        <input
          type="text"
          min="0"
          inputMode="decimal"
          id="precio"
          name="precio"
          pattern="^[0-9]+"
          onChange={handleOnChange}
        />
      </div>
      <p>πΊπΈ {precioUSD} USD</p>
      <p>π¨π± {precioCLP} CLP</p>

      <div>
        <p>
          1USD πΊπΈ π{" "}
          {rate ? `${roudedNumber(1 / rate.USD)} COPπ¨π΄` : "calculando..."}{" "}
        </p>
        <span className="fecha">{Date()}</span>
      </div>

      <div className="footer">
        <a href="https://github.com/nedilio" target="_blank">
          by @nedilio
        </a>
      </div>
    </div>
  );
}

export default App;
