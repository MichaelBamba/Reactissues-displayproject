import React, { Component } from "react";
import "./issuepull.css";
const Issues = props => {
  let { issue } = props;
  return (
    <div className="oneIssue">
      <p>Title: {issue.title} </p>
      <p> Reporter: {issue.user.login}</p>
      <p>
        url:
        {issue.url}
      </p>

      <p>This request is :{issue.state}</p>
    </div>
  );
};

export default Issues;
