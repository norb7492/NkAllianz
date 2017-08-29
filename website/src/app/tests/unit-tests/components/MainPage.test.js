import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import MainPage from './../../../components/MainPage/MainPage';
import {shallow, mount} from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Main Page', ()=>{
    it('should render main page', ()=> {
        const wrapper = shallow(<MainPage/>);
        expect(wrapper.length).toEqual(1);
    });
    it('Main page title', () => {
        const wrapper = shallow(<MainPage/>);
        const nkTitle = wrapper.find('.title-nk').text();
        expect(nkTitle).toBe('Hello Nk Allianz');
    })
});

