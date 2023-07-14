import React from "react";
import Menu from "../components/Menu.jsx";
import Home from "./Home.jsx";

class Router extends React.Component {
  render() {
    const menuItems = [
      { id: "home", label: "Home", content: () => <Home></Home> },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ];

    return (
      <div>
        <Menu items={menuItems} />
      </div>
    );
  }
}

export default Router;
