var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props)=> {
//   onSearch: function(e){
//     e.preventDefault();
//     var location = this.refs.search.value;
//     var encodedLoaction = encodeURIComponent(location)
//     if (location.length >0) {
//       this.refs.search.value = "";
//       window.location.hash ="#/?location="+encodedLoaction;
//     }
//   },
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">ReactTimer</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          {/*<form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>*/}
          <ul className="menu">
            <li className="menu-text">
              <span>Created By </span>
              <a href="http://jamesycs.gear.host" target="_blank">James Yau</a>
              </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Navigation;