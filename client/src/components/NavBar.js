// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const NavBarStyles = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #457B9D;
//   height: 50px;
  
//   a {
//     text-decoration: none;
//     padding-left: 10px;
//     color: white;
//     &:active {
//       color: red;
//     }
//   }
//   .right {
//     width: 100vw;
//     display: flex;
//     justify-content: space-around;
//   }
// `

// class NavBar extends Component {
//   render() {
//     return (
//       <NavBarStyles id="nav-container" class="some-class">
//         <Link to="/">Homepage</Link>
//         <div className="right">
//           <Link to="/User">user</Link>
//           <Link to="/user/:userId/deck">deck</Link>

//         </div>
        
//       </NavBarStyles>
//     );
//   }
// }

// export default NavBar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #457B9D;
  height: 50px;
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }
  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" class="some-class">
        <Link to="/">HomePage</Link>
        <div className="right">
          <Link to="/login">Log-In</Link>
        </div>
        
      </NavBarStyles>
    );
  }
}

export default NavBar;
