import React from "react";
import home from "../../images/home-icn.svg";
import report from "../../images/report-icn.svg";
import general from "../../images/group.svg";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <footer className="footerView">
          <div className="home">
            <img src={home} width={32} height={32} />
            <figcaption>Home</figcaption>
          </div>

          <div className="general">
            <img src={report} />
            <figcaption>General Observation</figcaption>
          </div>

          <div className="project_observation">
            <img src={general} width={28} height={32} />
            <figcaption>Project Observation</figcaption>
          </div>
        </footer>
      </div>
    </div>
  );
}
