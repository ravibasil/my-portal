import React from "react";

export default function ApplicantsStatus() {
  return (
    <div className="card">
      <select className="my-select mb-4">
        <option value>Project Filter here</option>
        <option value>Filter</option>
        <option value>Filter</option>
      </select>
      <div className="postscreeing-wrap">
        <ul>
          <li>
            <span className="circle-box">1</span> Application Applied
          </li>
          <li>
            <span className="circle-box">51</span> Application Rejected
          </li>
          <li>
            <span className="circle-box">1</span> Application on Hold
          </li>
          <li>
            <span className="circle-box">15</span> Application Applied
          </li>
          <li>
            <span className="circle-box">1</span> Application on Hold
          </li>
          <li>
            <span className="circle-box">81</span> Application Applied
          </li>
        </ul>
      </div>
    </div>
  );
}
