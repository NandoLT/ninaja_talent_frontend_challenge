import { getUsers } from "../../../../services/api/users/usersData";

describe('Test with getUsers axios', () => {

    test('Must return users from api and length must be > 0', async () => {
        
        const users = await getUsers();
        expect(users.length > 0).toBe(true);
        
    });
})