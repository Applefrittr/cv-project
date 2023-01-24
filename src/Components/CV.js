import { Component } from "react";
import "../Styles/cv.css"
import userIcon from "../Assets/profile-user.png"

class CV extends Component {
  constructor() {
    super();

    this.edit = this.edit.bind(this);
  }

  edit = () => {
    const CV = document.querySelector("#modal");
    const body = document.querySelector("body")

    CV.style.display = "none";
    body.style.overflow = "auto";
  };

  render() {
    const cv = this.props.cv;
    const workArray = cv.work.map((job) => {
      return (
        <div key={job.id}>
          <div className="align-left">{job.company}</div>
          <div className="align-left">{job.title}</div>
          <div className="align-left">
            From {job.from} to {job.to}
          </div>
          <div className="textarea-output align-left">{job.duties}</div>
        </div>
      );
    });
    const eduArray = cv.education.map((school) => {
      return (
        <div key={school.id}>
          <div className="align-left">{school.school}</div>
          <div className="align-left">{school.degree}</div>
          <div className="align-left">
            From {school.from} to {school.to}
          </div>
        </div>
      );
    });
    return (
      <div id="modal">
        <div id="CV">
          <div id="cv-sidebar-info">
            <a href="https://www.flaticon.com/search?word=user" target="_blank" rel="noreferrer"><img src={userIcon} alt="User Icon" id="user-icon"></img></a>
            <div>{cv.phone}</div>
            <div>{cv.email}</div>
          </div>
          <div id="about-section">
            <h1 className="align-left">{cv.name}</h1>
            <div className="textarea-output align-left">{cv.about}</div>
          </div>
          <div id="work-section">
            <h1 className="align-left">Work Experience</h1>
            {workArray}
          </div>
          <div id="education-section" className="align-left">
            <h1>Education</h1>
            {eduArray}
          </div>
        </div>
        <button onClick={this.edit}>Edit</button>
      </div>
    );
  }
}

export default CV;
