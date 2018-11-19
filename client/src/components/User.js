import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

    state = {
        user: []
    }

    getAllUsers = () => {

        axios.get('/api/user')
        .then((res) => {
            console.log(res)
        })

    }

    componentDidMount() {

        this.getAllUsers()
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default User;