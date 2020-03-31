import React, { Component } from "react";

import IssuesList from "./components/issueslist";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = {
    issueData: [],
    title: " React Issues"
  };

  issueData = async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const data = await response.json();
    return data;
  };


    this.setState({
      issueData: newissueData
    });
  };

  async componentDidMount() {
    const issueData = await this.issueData();

    this.setState({
      issueData: issueData
    });
  }

  render() {
    const { title, issueData } = this.state;
    return (
      <div className="App">
        <h1 classeName="title">{title}</h1>

        <IssuesList issueData={issueData} />
      </div>
    );
  }
}

export default App;
