import React from "react";

class ContentList extends React.Component {
  render() {
    const { contents } = this.props;

    return (
      <div>
        {contents.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <p>Creator: {item.creator}</p>
            <p>Timestamp: {item.timestamp}</p>
            <p>Keywords: {item.keywords.join(", ")}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ContentList;
