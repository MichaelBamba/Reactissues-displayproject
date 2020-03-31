import React, { Component } from "react";
import { Link } from "react-router-dom";

class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Issues: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const data = await response.json();
    this.setState({
      Issues: data
    });
    console.log(data);
  }

  render() {
    const { Issues } = this.state;

    return (
      <ul>
        {Issues.length > 0 ? (
          Issues.map(issue => (
            <li key={issue.id}>
              <p>{issue.title}</p>
              <Link to={`/issue/${issue.number}`}> Details</Link>
            </li>
          ))
        ) : (
          <li>No Data</li>
        )}
      </ul>
    );
  }
}

export default IssueList;
