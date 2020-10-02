import React from "react";

const Sidebar = () => {
  return (
    <div class="left-menu">
      <div class="logo-site">
        <span class="material-icons"> play_circle_filled </span>
      </div>
      <div id="dashMenu">
        <ul>
          <li>
            <a href="dashboard.html">
              <span class="material-icons material-icons-outlined">
                dashboard
              </span>
              My Dashboard
            </a>
          </li>
          <li>
            <a class="active-menu" href="">
              <span class="material-icons"> laptop_windows</span>
              Job Application
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons"> laptop_mac</span>
              Job Requisition
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons material-icons-outlined">
                {" "}
                help_outline
              </span>
              Questions
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons material-icons-outlined">email </span>
              Send Email
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons"> cloud_upload</span>
              Upload Video
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons"> text_snippet</span>
              Summary
            </a>
          </li>
          <li>
            <a href="">
              <span class="material-icons"> thumb_up_alt</span>
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
