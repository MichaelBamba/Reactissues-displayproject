import React, { Component } from "react";

class Issuedetail extends Component {
  state = {
    Details: []
  };

  async componentDidMount() {
    const { issue_number } = this.props.match.params;
    const issueDetail = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    );
    const detail = await issueDetail.json();
    this.setState({
      Details: detail
    });
    console.log(detail);

    this.setState({
      issueDetail
    });
  }

  render() {
    const { Details } = this.state;
    return (
      <div>
        {Details.title}
        <p>{Details.body} </p>
      </div>
    );
  }
}

export default Issuedetail;
