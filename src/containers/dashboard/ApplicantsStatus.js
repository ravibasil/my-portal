import React from 'react'

export default function ApplicantsStatus() {
  return (
    <div className="card" style={{ width: '30%' }}>
      <h4 className="card-title">Post Pre  screening</h4>
      <div className="custom-select">
        <span className="material-icons">
          expand_more
      </span>
        <select name id>
          <option value>Project Filter here</option>
          <option value>Filter</option>
          <option value>Filter</option>
        </select>
      </div>
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
  )
}
