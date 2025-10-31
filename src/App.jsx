import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <div className='app'>
        <h1>💹 Crypto Price Tracker</h1>
        <div className='coin-container'>
          {data.map((coin) => (
            <div key={coin.id} className='coin-card'>
              <img src={coin.image} alt={coin.name} />
              <h2> {coin.name} ({coin.symbol.toUpperCase()})</h2>
              <p>💲{coin.current_price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;