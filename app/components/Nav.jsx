var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Todo App
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <span>Created by -  </span><a href="https://github.com/smannepa" target="_blank">Susheel Mannepalli</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
module.exports = Nav;
