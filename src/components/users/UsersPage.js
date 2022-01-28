import React, { useEffect, useState } from 'react';
import Layout from "../commons/Layout";
import { getUsers } from '../../services/api/users/usersData';
import UsersList from './UsersList';
import Loader from '../commons/Loader';

const EmptyList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Users List Empty !!!</p>
        </div>
    )
}

const  UsersPage = () => {

    const initialState = [];
    const [users, setUsers] = useState(initialState);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUsers()
        .then(setUsers)
        .catch( error => {
            console.log(error);
            setError(error);
        })
        .finally( () => {
            setIsLoading(!isLoading);
            }
            );
    }, []);

    return (
        <Layout >
            {error ?
                <h2> Something go wrong, please try it again later </h2> 
                :
                isLoading ? 
                    <Loader />
                    :
                        users.length ?
                            <UsersList users={ users } /> :
                            <EmptyList />
            }
        </Layout>
    )
}

export default UsersPage;

        