import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderSummary from './OrderSummary';

configure({adapter: new Adapter()});

const state = {
    ingridients: {
        salad: 3,
        bacon: 2,
        cheese: 1,
        meat: 0
    }
}

describe('<OrderSummary />', () => {
    it('should render ingridient list', () => {
        const wrapper = shallow(<OrderSummary ingridients={state.ingridients}></OrderSummary>);
        expect(wrapper.find('li')).toHaveLength(4);
    });
});
