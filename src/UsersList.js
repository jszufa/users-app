import React, { Component } from 'react';
import './UsersList.css';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        console.log('zrenderowano UsersList')
        let usersArray = this.props.usersList;
        let usersArrayElements = usersArray.map((user) => {

            return <li key={user.id}>{user.name}</li>
        });

        return (
            <ul id="list">
                {usersArrayElements}
            </ul>
        );
    }
}


export default UsersList;

//pomyśleć sobie o budowie tej aplikacji od dołu...