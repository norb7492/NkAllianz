import expect from 'expect';
import React from 'react';
import ReactDom from 'react-dom';

import TestUtils from 'react-dom/test-utils';

import MainPage from './../../components/MainPage/MainPage';

describe('Main Page', ()=>{
    it('should exist main page', ()=> {
        expect(MainPage).toExist();
    });
});

