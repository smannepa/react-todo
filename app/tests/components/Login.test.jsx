import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import * as actions from 'actions';

import {Login} from 'Login';

describe('Login', () => {
  it('Should exist', () => {
    expect(Login).toExist();
  });
});
