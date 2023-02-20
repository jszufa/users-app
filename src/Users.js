import React, { Component } from 'react';
import './Users.css';

import UsersList from './UsersList';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [/* { id: 123, name: 'Jola' }, { id: 223, name: 'Ola' } */]
        };
    }


    /* createLiItem = (name) => {
        var ulItem = document.getElementById('list');
        let liItem = document.createElement('li');
        ulItem.appendChild(liItem);
        liItem.appendChild(document.createTextNode(name));
        liItem.addEventListener('click', () => { liItem.remove() });} */



    updateUsers = (text) => {

        console.log('Uruchomiono updateUsers')
        this.setState(
            (prevState) => {
                let index = Math.floor(100 + Math.random() * 900);
                prevState.users.push({ id: index, name: text });
                let currentUsersList = prevState.users;
                console.log(currentUsersList);
                return ({ users: currentUsersList });
            }
        )
    }


    render() {

        let inputName;

        /* console.log(inputName.value) */

        return (
            <div className='users'>
                <h1>Users' List</h1>

                <input ref={(data) => { inputName = data }} type="text" placeholder='Enter name' />

                {/* po kliknięciu ma pojawić się nowy element w liście */}
                <button onClick={() => { this.updateUsers(inputName.value) }}>Add user</button>

                <UsersList usersList={this.state.users} />
            </div>

        )
    }
}

export default Users;