// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom'
// // import styled from 'styled-components'
// import HomePage from './components/HomePage'
// import User from './components/User'
// import DeckPage from './components/DeckPage'
// import CardsPage from './components/CardsPage'
// import NavBar from './components/NavBar'
// import { createGlobalStyle } from 'styled-components'

// const Global = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css?family=Poppins');
  
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     background: #A8DADC;
//   }
// `

// class App extends Component {
//   render () {
//     return (
//       <Router>
//         <div>
//         <Global />
//           <NavBar />
//           <Switch>
//             {/* <Route path="/users" component={User}/> */}
//             {/* <Route path="/user/:userId" component={User}/> */}
//             <Route path="/user/:userId/deck" component={DeckPage}/>
//             <Route  path="/user/:userId/deck/:deckId/cards" component={CardsPage}/>
//             <Route path="/" component={HomePage}/>
//             <Route path="/users" component={User}/>
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }

// export default App

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import HomePage from './components/HomePage'
import DeckPage from './components/DeckPage'


import NavBar from './components/NavBar'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #A8DADC;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route  path="/login" component={LogInPage}/>
            <Route path="/users/:userId" component={DeckPage}/>
            <Route path="/" component={HomePage}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;

