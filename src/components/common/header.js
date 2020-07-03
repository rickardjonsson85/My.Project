import React, { Component } from "react";
import { Link } from "react-router-dom";

class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      path: ""
    };
  }

  componentDidMount = () => {
    this.setActiveStyle();
  };

  // UNSAFE_componentWillMount = () => {
  //   this.setActiveStyle();
  // };

  animateMenu = () => {
    this.setActiveStyle();
    this.setState({ open: !this.state.open });
  };

  setActiveStyle = () => {
    let currentUrl = window.location.pathname;
    console.log("current url : " + currentUrl);
    this.setState({ path: currentUrl });
  };

  render() {
    // this.setActiveStyle();

    let { open, path } = this.state;
    return (
      <header className="header">
        {/* <div className="container"> */}

        <div className={open ? "open" : "closed"} onClick={this.animateMenu}>
          <h1>Menu</h1>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav onClick={this.animateMenu} className={open ? "visible" : "hidden"}>
          {(() => {
            if (path === "/") {
              return (
                <Link className="active" to="/">
                  Home
                </Link>
              );
            } else {
              return <Link to="/">Home</Link>;
            }
          })()}
          {(() => {
            if (path === "/mental") {
              return (
                <Link className="active" to="/mental">
                  Mental Health
                </Link>
              );
            } else {
              return <Link to="/mental">Mental Health</Link>;
            }
          })()}
          {(() => {
            if (path === "/brotherhood") {
              return (
                <Link className="active" to="/brotherhood">
                  Brotherhood
                </Link>
              );
            } else {
              return <Link to="/brotherhood">Brotherhood</Link>;
            }
          })()}
          <h1>CLOSE MENU</h1>
        </nav>
      </header>
    );
  }
}
export default navigation;
