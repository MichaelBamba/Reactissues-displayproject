import React, { Component } from "react";

import Issues from "./issuespull";

class IssueList extends Component {
  state = {
    issues: []
  };

  async componentDidMount() {
    const { issueData } = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    this.setState({
      issues: issueData
    });
  }

  render() {
    const { issues } = this.state;

    return (
      <ul>
        {issues.length > 0 ? (
          issues.map(issue => <Issues key={issues.id} issue={issue} />)
        ) : (
          <li>No issueData Data</li>
        )}
      </ul>
    );
  }
}

export default IssueList;
