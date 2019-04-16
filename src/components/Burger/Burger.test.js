import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Burger from './Burger';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    it('should render one element', () => {
        const wrapper = shallow(<Burger />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});

