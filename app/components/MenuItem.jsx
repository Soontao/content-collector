/* eslint-disable react/prop-types */
export default class MenuItem extends React.Component {
  render() {
    const { label, active, onItemClick } = this.props;
    const className = active ? "active" : "";

    return (
      <li className={className} onClick={onItemClick}>
        {label}
      </li>
    );
  }
}
