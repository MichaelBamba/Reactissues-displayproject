import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import IssueDetail from "./components/issuedetai";
import IssueList from "./components/issueslist";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={IssueList} />
        {/* <Route path="/issue/:issue_number?" component={IssueDetail} /> */}
      </Router>
    </div>
  );
}

export default App;
