import React, { Component } from "react";

import Issues from "./issuespull";

class IssueList extends Component {
  state = {
    issues: []
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const data = response.json();
    this.setState({
      issues: data
    });
    console.log(data);
  }

  render() {
    const { issues } = this.state;

    return (
      <ul>
        {issues.length > 0 ? (
          issues.map(issue => <li Issues key={issues.id} issue={issue} />)
        ) : (
          <li>No issueData Data</li>
        )}
      </ul>
    );
  }
}

export default IssueList;
