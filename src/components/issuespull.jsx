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
      <p>THIS IS ACTIVE</p>
    </div>
  );
};

export default Issues;
