import React from "react";
import ContentList from "../components/ContentList.jsx";

class Home extends React.Component {
  render() {
    const contents = [
      {
        title: "Sample Title 1",
        creator: "John Doe",
        timestamp: "2022-01-01",
        keywords: ["React", "Component", "List"],
      },
      {
        title: "Sample Title 2",
        creator: "Jane Smith",
        timestamp: "2022-02-01",
        keywords: ["Card", "Style", "Example"],
      },
      // Add more items as needed
    ];
    return (
      <div>
        <p>Home Page</p>
        <ContentList contents={contents}></ContentList>
      </div>
    );
  }
}

export default Home;
