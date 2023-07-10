import MenuItem from "./MenuItem.jsx";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  handleItemClick = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    const { activeItem } = this.state;
    const { items } = this.props;

    return (
      <div className="menu">
        <ul className="horizontal-menu">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              label={item.label}
              active={item.id === activeItem}
              onItemClick={() => this.handleItemClick(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
