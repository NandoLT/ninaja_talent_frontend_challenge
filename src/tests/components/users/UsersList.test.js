import { shallow } from 'enzyme';
import React from 'react';
import UsersList from '../../../components/users/UsersList';

describe('Tests in <UsersList />', () => {
    test('Should display correctly list of users if users array is not empty', () => {
        const users = [
            {
                'id': 23,
                'name': 'Fernando',
                'mail': 'fernadno@ninjatalent.es'
            }
        ]
        const wrapper = shallow(<UsersList users={ users } />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should display <EmptyLisst /> if users is empty', () => {

        const users = [];
        const wrapper = shallow(<UsersList users={ users } />);
        expect(wrapper.find('EmptyList').length).toBe(1);
    })
})