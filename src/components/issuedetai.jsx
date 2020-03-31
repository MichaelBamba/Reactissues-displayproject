import React, { Component } from "react";

class Issuedetail extends Component {
  state = {
    issueDetails: []
  };

  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const issueDetail = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );
    const detail = await issueDetail.json();
    this.setState({
      issueDetails: detail
    });
    console.log(detail);

    this.setState({
      issueDetail
    });
  }

  render() {
    const { issueDetail } = this.state;
    return <div>{issueDetail.title}</div>;
  }
}

export default Issuedetail;
