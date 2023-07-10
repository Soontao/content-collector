import Menu from "../components/Menu.jsx";

class Home extends React.Component {
  render() {
    const menuItems = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ];

    return (
      <div>
        <h1>My App</h1>
        <Menu items={menuItems} />
      </div>
    );
  }
}

export default Home;
