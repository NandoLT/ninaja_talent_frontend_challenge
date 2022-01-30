import { shallow } from 'enzyme';
import React from 'react';
import UsersPage from '../../../components/users/UsersPage';

describe('Tests in <UsersPage />', () => {

    test('Should display correctly', () => {

        const wrapper = shallow(<UsersPage />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should display a list of users', () => {

        const wrapper = shallow(<UsersPage />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('UsersList').length).toBe(1);
    });
})