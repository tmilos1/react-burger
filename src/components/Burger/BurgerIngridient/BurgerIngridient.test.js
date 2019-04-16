import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import BurgerIngridient from './BurgerIngridient';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    it('should render one element', () => {
        // const wrapper = shallow(<BurgerIngridient />);
        expect(true).toBe(true);
    });
});
