import { shallow } from 'enzyme';
import React from 'react';
import UserDetail from '../../../components/users/UserDetail';

describe('Test in <UserDetail />', () => {

    test('Should display correctly', () => {
        const seeUserDetail =  true;
        const handleUserDetail = () => {};
        const userDetail = { 
            'id': 789,
            'name': 'Fernando LT', 
            'mail': 'fernando@ninjatalent.com'
        };

        const wrappper = shallow(<UserDetail seeUserDetail={seeUserDetail} handleUserDetail={handleUserDetail} userDetail={userDetail}/>);
        expect(wrappper).toMatchSnapshot();
    })
})