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

  _renderActiveContent() {
    const { activeItem } = this.state;
    const { items } = this.props;
    const activeItemObj = items.find((item) => item.id === activeItem);
    if (activeItemObj && typeof activeItemObj.content === "function") {
      return activeItemObj.content();
    }
    return <div></div>;
  }

  render() {
    return (
      <div>
        <div className="menu">
          <ul className="horizontal-menu">{this._renderItems()}</ul>
        </div>
        <div>{this._renderActiveContent()}</div>
      </div>
    );
  }
}

export default Menu;
