import React, { useEffect, useState } from 'react';
import Layout from "../commons/Layout";
import { getUsers } from '../../services/api/users/usersData';
import UsersList from './UsersList';
import Loader from '../commons/Loader';

const  UsersPage = () => {

    let initialState = [];
    
    const [users, setUsers] = useState(initialState);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(setUsers)
            .catch( error => {
                console.log(error);
                setError(error);
            })
            .finally( () => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Layout >
            {error ?
                <h2> Something go wrong, please try it again later </h2> 
                :
                isLoading ? 
                    <Loader />
                    :
                    <UsersList users={ users } /> 
            }
        </Layout>
    )
}

export default UsersPage;
