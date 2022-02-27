/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <switch>
          <Route path="/checkout">
            <Header />
            <h1>I am a checkout page</h1>
          </Route>
        </switch>
        <switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  )
}

export default App
