import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

class HomePage extends Component {
  state = {
    users: []
  }

  getAllUsers = () => {
    axios.get('/api/user').then((res) => {
      this.setState({ users: res.data })
    }).catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  // componentDidMount() {
  //   axios.get('/api/users').then((res) => {
  //     this.setState({users: res.data})
  //     console.log(res.data)
  //   })
  // }

  render() {
    let users = this.state.users.map((user, i) => (
      <div>
        <div key={i}>
          {user.username}
        </div>

      </div>

    ))

    return (

      <div>{users}</div >

    )
  }
}

  export default HomePage