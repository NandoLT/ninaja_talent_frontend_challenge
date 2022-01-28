import React, { useState } from 'react';
import UserDetail from './UserDetail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import '../../assets/css/usersList.css';

const UsersList= ({ users }) => {

    const [seeUserDetail, setSeeUserDetail] = useState(false);
    const [userDetail, setUserDetail] = useState({});

    const handleUserDetail = () => {
        setSeeUserDetail(!seeUserDetail);
    }

    const getUserDetail = (user) => {
        setUserDetail(user);
    }

    return (
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
    );
}


export default UsersList;

