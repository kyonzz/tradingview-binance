import "./App.css";
import TradingViewChart from "./components/TradingViewChart/tradingViewChart";

function App() {
  return (
    <div className="App">
      <h1 className="title">Tradingview with realtime data from Binance API</h1>
      <TradingViewChart />
      <div style={{ marginTop: 20 }}>
        <h2>Features</h2>
        <ul>
          <li>
            <p>
              - The chart can show resolutions like Binance (15m, 1h, 4h, 1D,
              1W, ...) ✅
            </p>
          </li>
          <li>
            <p>- The chart can pick and search coin pairs from Binance ✅</p>
          </li>
          <li>
            <p>- Realtime ✅</p>
          </li>
          <li>
            <p>- Show Moving Average Indicators (MA line) ✅</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
