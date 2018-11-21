// import React, { Component } from 'react';
// import axios from 'axios'
// import styled from 'styled-components'
// import Deck from './Deck'

// const NewIdeaButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 7.5px 5px;
// `

// const IdeasContainerStyle = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   align-content: flex-start;
// `

// class DeckPage extends Component {
//   state = {
//     user: {},
//     decks: []
//   }

//   componentDidMount() {
//     this.getAllDecks()
//   }

//   getAllDecks = () => {
//     // make an api call to get one single user
//     // On the server URL is '/api/users/:userId'
//     const userId = this.props.match.params.userId
//     axios.get(`/api/users/${userId}`).then(res => {
//       this.setState({
//         user: res.data,
//         decks: res.data.decks
//       })
//     })
//   }

//   handleCreateNewDeck = () => {
//     const userId = this.props.match.params.userId
//     const payload = {
//       name: 'Deck name',
//       description: 'Deck Description'
//     }
//     axios.post(`/api/users/${userId}/deck`, payload).then(res => {
//       const newDeck = res.data
//       const newStateDecks = [...this.state.decks, newDeck]
//       this.setState({ decks: newStateDecks })
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.user.username}'s Idea Page</h1>
//         <NewIdeaButton onClick={this.handleCreateNewDeck}>
//           New Idea
//         </NewIdeaButton>
//         <IdeasContainerStyle>
//           {this.state.decks.map( => (
//             <Deck getAllDecks={this.getAllDecks} key={decks._id} deck={deck}/>
//           ))}
//         </IdeasContainerStyle>
//       </div>
//     )
//   }
// }


// export default DeckPage;
