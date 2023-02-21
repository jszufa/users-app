import React from 'react';
import './UsersList.css';

function UsersList(props) {

    let usersArray = props.usersList;
    let usersArrayElements = usersArray.map((user) => {
        return <li key={user.id} onClick={() => props.removeUMethod(user.id)}>{user.name}</li>
    });

    return (
        <ul id="list">
            {usersArrayElements}
        </ul>
    );

}


export default UsersList;

//pomyśleć sobie o budowie tej aplikacji od dołu...