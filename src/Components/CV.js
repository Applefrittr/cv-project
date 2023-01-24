import { Component } from "react";
import "../Styles/cv.css"
import userIcon from "../Assets/profile-user.png"
import Phone from "../Assets/phone.png"
import Email from "../Assets/email.png"
import Social from "../Assets/social.png"


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
          <h3 className="align-left">{job.company}</h3>
          <div className="align-left"><i>{job.title}</i> - {job.from} to {job.to}</div>
          <div className="textarea-output align-left">{job.duties}</div>
        </div>
      );
    });
    const eduArray = cv.education.map((school) => {
      return (
        <div key={school.id}>
          <h3 className="align-left">{school.school}</h3>
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
          <div id="cv-sidebar-info" className="section">
            <a href="https://www.flaticon.com/search?word=user" target="_blank" rel="noreferrer"><img src={userIcon} alt="User Icon" id="user-icon"></img></a>
            <h2>Contact</h2>
            <div><img src={Phone} alt="phone icon" className="icon"></img> {cv.phone}</div>
            <div><img src={Email} alt="email icon" className="icon"></img> {cv.email}</div>
            <div><img src={Social} alt="social network icon" className="icon"></img> {cv.social}</div>
          </div>
          <div id="about-section" className="section">
            <h1 className="align-left">{cv.name}</h1>
            <div className="textarea-output align-left">{cv.about}</div>
          </div>
          <div id="work-section" className="align-left section">
            <h1>Work Experience</h1>
            {workArray}
          </div>
          <div id="education-section" className="align-left section">
            <h1>Education</h1>
            {eduArray}
          </div>
        </div>
        <div className="CV-buttons-container">
          <button id="CV-edit" className="CV-buttons" onClick={this.edit}>Edit</button>
          <button id="CV-save" className="CV-buttons">Save</button>
        </div>
      </div>
    );
  }
}

export default CV;
