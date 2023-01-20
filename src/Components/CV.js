import { Component } from "react";

class CV extends Component {
  constructor() {
    super();

    this.edit = this.edit.bind(this);
  }

  edit = () => {
    const CV = document.querySelector("#CV");

    CV.style.display = "none";
  };

  render() {
    const cv = this.props.cv;
    const workArray = cv.work.map((job) => {
      return (
        <div key={job.id}>
          <div>{job.company}</div>
          <div>{job.title}</div>
          <div>
            From {job.from} to {job.to}
          </div>
        </div>
      );
    });
    const eduArray = cv.education.map((school) => {
      return (
        <div key={school.id}>
          <div>{school.school}</div>
          <div>{school.degree}</div>
          <div>
            From {school.from} to {school.to}
          </div>
        </div>
      );
    });
    return (
      <div id="CV">
        <div>{cv.name}</div>
        <div>{cv.phone}</div>
        <div>{cv.email}</div>
        {workArray}
        {eduArray}
        <button onClick={this.edit}>Edit</button>
      </div>
    );
  }
}

export default CV;
