import client from "../client";

const usersBaseUrl = '/users';

export const getUsers = () => {
    const url = `${usersBaseUrl}`;
    return client.get(url);
}