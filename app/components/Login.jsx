import React from 'react';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todooy</h1>
        <div className="row">
          <div className="small-10 medium-6 large-4 small-centered columns">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with your GitHub account</p>
              <button className="button expanded">Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default Login;
