import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Events from './components/Events';

import "./styles.scss";

const App = () => {

  const [coinData, setCoinData] = useState([]);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.coingecko.com/api/v3/events?country_code=US"
      )
      .then(res => {
        console.log(res.data)
        setEventData(res.data)
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Charts coinData={coinData} />
        </Route>
        <Route path='/events'>
          <Events eventData={eventData} />
        </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
