import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todooy</h1>
        <div className="row">
          <div className="small-10 medium-6 large-4 small-centered columns">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with your GitHub account</p>
              <button className="button expanded" onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default Redux.connect()(Login);
