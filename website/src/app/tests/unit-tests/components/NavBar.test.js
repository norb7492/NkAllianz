import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import NavBar from './../../../components/NavBar/NavBar';
import {shallow} from 'enzyme';

describe('Mav Bar', ()=>{
    it('should render the navbar', () => {
       const wrapper = shallow(<NavBar/>);
       expect(wrapper.length).toEqual(1);  
    });
});