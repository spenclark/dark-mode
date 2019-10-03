import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
import Signup from './components/signup'


import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />      
      <div className="nav-signup">
        <Router>
          <Route exact path="/" />
          <Route path="/signup" component={Signup}/> 
          <NavLink to='signup'><button className="aBtn">Signup</button></NavLink>
          {/* <NavLink to='/'><button className="aBtn">Close</button></NavLink> */}
          </Router>
        </div>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App