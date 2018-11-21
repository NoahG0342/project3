import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import User from './components/User'
import DeckPage from './components/DeckPage'
import CardsPage from './components/CardsPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          
          <Switch>
            {/* <Route path="/users" component={User}/> */}
            <Route path="/users/:userId" component={User}/>
            <Route path="/users/:userId/deck" component={DeckPage}/>
            <Route exact path="/users/:userId/deck/:deckId/cards" component={CardsPage}/>
            <Route path="/user" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
