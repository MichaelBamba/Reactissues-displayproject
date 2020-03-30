import React from "react";
import Issues from "./issuespull";

const IssuesList = props => {
  const { issueData } = props;
  console.log(props);
  return (
    <ul className="issuesList">
      {issueData.length > 0 ? (
        issueData.map(issue => (
          <li className="issues" key={issueData.url}>
            <Issues issue={issue} />
          </li>
        ))
      ) : (
        <li>No issueData Data</li>
      )}
    </ul>
  );
};

export default IssuesList;
