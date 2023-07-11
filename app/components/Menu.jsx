import React from "react";
import MenuItem from "./MenuItem.jsx";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.items[0].id ?? "",
    };
  }

  _handleItemClick = (item) => {
    this.setState({ activeItem: item });
  };

  _renderItems() {
    const { activeItem } = this.state;

    const { items } = this.props;
    return items.map((item) => (
      <MenuItem
        key={item.id}
        label={item.label}
        active={item.id === activeItem}
        onItemClick={() => this._handleItemClick(item.id)}
      />
    ));
  }

  render() {
    return (
      <div className="menu">
        <ul className="horizontal-menu">{this._renderItems()}</ul>
      </div>
    );
  }
}

export default Menu;
