import React from "react";

import data from "../../data/postScreening.json";

export default function PostScreeningVideoInterview() {
  return (
    <div className="card">
      <h4 className="card-title">Post Pre screening</h4>
      <div className="row mb-4">
        {data.rejected.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="d-flex">
                <div className="vertical-text">PSVQ1</div>
                <div className="text-center">
                  <span>{item}</span>
                  <div className="vertical-bar">
                    <div
                      className={`vertical-progress ${
                        item < 40 ? "tertiory" : "secondary"
                      }`}
                      style={{ height: `${item}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-12 mt-2 text-center">
          <h6>Rejected</h6>
        </div>
      </div>
      <div className="row mb-4">
        {data.onHold.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="d-flex">
                <div className="vertical-text">PSVQ1</div>
                <div className="text-center">
                  <span>{item}</span>
                  <div className="vertical-bar">
                    <div
                      className={`vertical-progress ${
                        item < 40 ? "tertiory" : "secondary"
                      }`}
                      style={{ height: `${item}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-12 mt-2 text-center">
          <h6>On Hold</h6>
        </div>
      </div>
      <div className="row mb-4">
        {data.reviewPending.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="d-flex">
                <div className="vertical-text">PSVQ1</div>
                <div className="text-center">
                  <span>{item}</span>
                  <div className="vertical-bar">
                    <div
                      className={`vertical-progress ${
                        item < 40 ? "tertiory" : "secondary"
                      }`}
                      style={{ height: `${item}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-12 mt-2 text-center">
          <h6>Review Pendings</h6>
        </div>
      </div>
    </div>
  );
}
