import React, { useEffect, useState } from 'react';
import UserDetail from './UserDetail';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import '../../assets/css/usersList.css';

const UsersList= ({ users }) => {
    const [seeUserDetail, setSeeUserDetail] = useState(false);
    const [userDetail, setUserDetail] = useState({});


    useEffect(() => {
        console.log('USERS', users);
    })

    const handleUserDetail = () => {
        setSeeUserDetail(!seeUserDetail);
    }

    const getUserDetail = (user) => {
        setUserDetail(user);
    }

    const EmptyList = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Users List Empty !!!</p>
            </div>
        )
    }

    return (
        users.length ? 
            <>
                <div className="users-table">
                    <table className="table is-striped is-hoverable">
                        <thead>
                            <tr>
                                <th> User Id</th>
                                <th> User Name </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map( user => { 
                                return (
                                    <tr key={ user.id }>
                                        <td>{ user.id }</td>
                                        <td>{ user.name }</td>
                                        <td><FontAwesomeIcon 
                                                className="see_user_detail"
                                                icon={ faEye }
                                                onClick={ () => { 
                                                    handleUserDetail();
                                                    getUserDetail(user);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <UserDetail seeUserDetail={ seeUserDetail } handleUserDetail={ handleUserDetail } userDetail={ userDetail }/>
            </>
            :
            <EmptyList />
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}



export default UsersList;

