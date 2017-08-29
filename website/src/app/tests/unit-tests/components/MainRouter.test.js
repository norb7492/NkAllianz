import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import MainRouter from './../../../components/MainRouter/MainRouter';
import {shallow} from 'enzyme';

describe('Main Router', ()=>{
    it('should render the router', () => {
       const wrapper = shallow(<MainRouter/>);
       expect(wrapper.length).toEqual(1);  
    });
});

