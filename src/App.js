/* eslint-disable eqeqeq */
import { Component } from "react";
import Education from "./Components/Education";
import GeneralInfo from "./Components/GeneralInfo";
import Jobs from "./Components/Jobs";
import CV from "./Components/CV";
import "./Styles/builder.css";
import Work from "./Assets/work.png"
import Git from "./Assets/git.png"

// Class App is our main componenet which holds our state values (CV information) - the values are set by the user through the component forms.  React library used
// to build out DOM instead of the browsers DOM api
class App extends Component {
  constructor() {
    super();
    // State value.  Work and education are object arrays.  Each object in the coresponding array has its own set of values
    // localStorage.clear()
    if (localStorage.getItem("state")) {
      this.state = JSON.parse(localStorage.getItem("state"));
    } else {
      this.state = {
        name: "",
        email: "",
        phone: "",
        social: "",
        about: "",
        work: [],
        education: [],
      };
      localStorage.setItem("state", JSON.stringify(this.state));
    }

    // bind all class methods to this App object
    this.createCV = this.createCV.bind(this);
    this.addWork = this.addWork.bind(this);
    this.addEdu = this.addEdu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeWork = this.handleChangeWork.bind(this);
    this.handleChangeEdu = this.handleChangeEdu.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  // Create CV button will create a pop up modal with a filled out CV
  createCV = () => {
    const modal = document.querySelector("#modal");
    const body = document.querySelector("body");
    modal.style.display = "flex";
    body.scrollIntoView();
    body.style.overflow = "hidden";
  };

  // addWork method creates a new work object and adds (using spread operator) it into the state work array.  These objects are rendered as Job components in the DOM
  addWork = () => {
    this.setState({
      work: [
        ...this.state.work,
        {
          company: "",
          title: "",
          from: "",
          to: "",
          duties: "",
          id: Math.floor(Math.random() * 1000), //unique id for each work object created to be used as unique key and id values in the DOM
        },
      ],
    });
    // Because this.setState() is async, we want to ensure that the state in the localStorgage gets updated after the this.state completes.  Thus, we use
    // setTimeout to queue up localStorage.setItem() in the event loop
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // addEdu method creates a new school object and adds it into the state education array.  These objects are rendered as Education components in the DOM
  addEdu = () => {
    this.setState({
      education: [
        ...this.state.education,
        {
          school: "",
          degree: "",
          from: "",
          to: "",
          id: Math.floor(Math.random() * 1000 + 1000), //unique id for each school object created to be used as unique key and id values in the DOM
        },
      ],
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // Each job component rendered in the DOM has a delete button.  When clicked, that specific work object is filtered out of the this.state job array.  The job component
  // is identified by it's unique id set when the work object was created
  deleteWork = (e) => {
    e.preventDefault();
    const target = e.target;
    const newWork = this.state.work.filter((job) => job.id != target.id);
    this.setState({
      work: newWork,
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // Same comment as deleteWork() but for the education array of this.state.  These two methods could be combined into one and using the event object to identify which
  // array in this.state to filter
  deleteEdu = (e) => {
    e.preventDefault();
    const target = e.target;
    const newEdu = this.state.education.filter(
      (school) => school.id != target.id
    );
    this.setState({
      education: newEdu,
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // event handler method which sets the state of either name, email, phone, or about values in this.state depending on the event target and the coresponding "name"
  // properties in the DOM elements
  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0)
  };

  // same idea as handleChange() but with the added step of iterating through the work array and identifying the correct job object then the specific value to modify.
  // array.map is then used to update this.state's work array
  handleChangeWork = (e) => {
    const target = e.target;
    const name = target.name;
    this.state.work.forEach((job) => {
      if (target.id == job.id) job[name] = target.value;
    });
    this.setState({
      work: this.state.work.map((job) => job),
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // see handleChangeWork(), same process but targeting this.state's education array
  handleChangeEdu = (e) => {
    const target = e.target;
    const name = target.name;
    this.state.education.forEach((school) => {
      if (target.id == school.id) school[name] = target.value;
    });
    this.setState({
      education: this.state.education.map((school) => school),
    });
    // see same setTimeout call in addWork for reasoning
    setTimeout(() => {
      localStorage.setItem("state", JSON.stringify(this.state));
    }, 0);
  };

  // our component App's render method.  App's methods are passed to the form components as props
  render() {
    //array.map() used to create an array of Job components to be rendered
    const jobsArray = this.state.work.map((job) => {
      return (
        <Jobs
          handleChange={this.handleChangeWork}
          deleteWork={this.deleteWork}
          key={job.id} // Following React guidlines, unique id is set to each job object/component rendered
          id={job.id} // The unique id's generated are passed as props to identify each job object/component in the DOM
          data={job} // pass the job object itelsf as a prop to the Job component
        />
      );
    });
    //array.map() used to create an array of Education components to be rendered
    const eduArray = this.state.education.map((school) => {
      return (
        <Education
          handleChange={this.handleChangeEdu}
          deleteEdu={this.deleteEdu}
          key={school.id} // Following React guidlines, unique id is set to each school object/component rendered
          id={school.id} // The unique id's generated are passed as props to identify each school object/component in the DOM
          data={school} // pass the school object itself as a prop to the education component
        />
      );
    });

    return (
      <div id="container">
        <h1 id="header"><img src={Work} alt="work icon"></img> CV Builder</h1>
        <div id="builder-container">
          <div className="form-container">
            <h1>General Information</h1>
            <GeneralInfo handleChange={this.handleChange} data={this.state} />
          </div>
          <div id="jobs-builder" className="form-container">
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
        </div>
        <button id="create-cv" onClick={this.createCV}>
          Create CV
        </button>
        <CV cv={this.state} />
        <footer>
          Created January 2023 by Applefrittr
          <a href="https://github.com/Applefrittr" rel= "noreferrer" target="_blank">
            <img src={Git} alt="GitHub Applefrittr"></img>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
