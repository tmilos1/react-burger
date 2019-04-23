import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Burger from './Burger';

configure({adapter: new Adapter()});

const oneIngredient = {
    ingridients: {
        salad: 1,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
}

describe('<Layout />', () => {
    it('should render one element', () => {
        const wrapper = shallow(<Burger ingridients={oneIngredient}/>);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});

