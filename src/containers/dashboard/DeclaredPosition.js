import React from "react";

import positionData from "../../data/declaredPosition.json";

const DeclaredPosition = () => {
  return (
    <div className="card">
      <div className="position-row">
        <div className="position-list"></div>
        <div className="interview-box-right"></div>
      </div>
      <h4 className="card-title">Declared Positions</h4>
      <div className="position-wrap">
        <div className="position-box bg-danger">
          <div className="card-body  p-4">
            <div className="media">
              <div className="media-body text-white">
                <p className="mb-1">Java Developer, 2 Years</p>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${positionData.javaDeveloper}%` }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div> {`${positionData.javaDeveloper}`} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-box bg-success">
          <div className="card-body  p-4">
            <div className="media">
              <div className="media-body text-white">
                <p className="mb-1">React Developer, 2 Years</p>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${positionData.reactDeveloper}%` }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div>{`${positionData.reactDeveloper}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-box bg-info">
          <div className="card-body  p-4">
            <div className="media">
              <div className="media-body text-white">
                <p className="mb-1">HTML Developer, 2 Years</p>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${positionData.htmlDeveloper}%` }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div> {`${positionData.htmlDeveloper}`} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-box bg-primary">
          <div className="card-body  p-4">
            <div className="media">
              <div className="media-body text-white">
                <p className="mb-1">Vue Developer, 2 Years</p>
                <div className="progress-container">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${positionData.vueDeveloper}%` }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div>{`${positionData.vueDeveloper}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclaredPosition;
