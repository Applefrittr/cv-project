/* eslint-disable eqeqeq */
import { Component } from "react";
import Education from "./Components/Education";
import GeneralInfo from "./Components/GeneralInfo";
import Jobs from "./Components/Jobs";
import CV from "./Components/CV";
import "./Styles/builder.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      about: "",
      work: [],
      education: [],
    };

    this.createCV = this.createCV.bind(this);
    this.addWork = this.addWork.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeWork = this.handleChangeWork.bind(this);
    this.handleChangeEdu = this.handleChangeEdu.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  createCV = () => {
    const CV = document.querySelector("#CV")
    CV.style.display = "block"
  };

  addWork = () => {
    this.setState({
      work: [
        ...this.state.work,
        {
          company: "",
          title: "",
          from: "",
          to: "",
          id: Math.floor(Math.random() * 1000),
        },
      ],
    });
  };

  addEdu = () => {
    this.setState({
      education: [
        ...this.state.education,
        {
          school: "",
          degree: "",
          from: "",
          to: "",
          id: Math.floor(Math.random() * 1000 + 1000),
        },
      ],
    });
  };

  deleteWork = (e) => {
    e.preventDefault();
    const target = e.target;
    const newWork = this.state.work.filter((job) => job.id != target.id);
    this.setState({
      work: newWork,
    });
  };

  deleteEdu = (e) => {
    e.preventDefault();
    const target = e.target;
    const newEdu = this.state.education.filter(
      (school) => school.id != target.id
    );
    this.setState({
      education: newEdu,
    });
  };

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  };

  handleChangeWork = (e) => {
    const target = e.target;
    const name = target.name;
    this.state.work.forEach((job) => {
      if (target.id == job.id) job[name] = target.value;
    });
    this.setState({
      work: this.state.work.map((job) => job),
    });
  };

  handleChangeEdu = (e) => {
    const target = e.target;
    const name = target.name;
    this.state.education.forEach((school) => {
      if (target.id == school.id) school[name] = target.value;
    });
    this.setState({
      education: this.state.education.map((school) => school),
    });
  };

  render() {
    const jobsArray = this.state.work.map((job) => {
      return (
        <Jobs
          handleChange={this.handleChangeWork}
          deleteWork={this.deleteWork}
          key={job.id}
          id={job.id}
        />
      );
    });

    const eduArray = this.state.education.map((school) => {
      return (
        <Education
          handleChange={this.handleChangeEdu}
          deleteEdu={this.deleteEdu}
          key={school.id}
          id={school.id}
        />
      );
    });

    return (
      <div id="container">
        <h1 id="header">CV Builder</h1>
        <div id = "builder-container">
          <div className="form-container">
            <h1>General Information</h1>
            <GeneralInfo handleChange={this.handleChange} />
          </div>
          <div  id="jobs-builder" className="form-container">
            <h1>Work Experience</h1>
            {jobsArray}
            <button id="add-work" onClick={this.addWork}>
              Add Work
            </button>
          </div>
          <div className="form-container">
            <h1>Education</h1>
            {eduArray}
            <button id="add-edu" onClick={this.addEdu}>
              Add School
            </button>
          </div>
          <CV cv={this.state} />
        </div>
        <button id="create-cv" onClick={this.createCV}>
            Create
        </button>
      </div>
    );
  }
}

export default App;
