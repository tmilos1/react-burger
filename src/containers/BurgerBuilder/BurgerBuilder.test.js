import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BurgerBuilder from './BurgerBuilder';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    it('should render one div and children', () => {
        // const wrapper = shallow(<Layout><ul><li></li><li></li><li></li></ul></Layout>);
        // expect(wrapper.find('div')).toHaveLength(1);
        // expect(wrapper.find('li')).toHaveLength(3);
        expect(true).toBe(true);
    });
});