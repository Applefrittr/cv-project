import { Component } from "react";

class Education extends Component {
  render() {
    const data = this.props.data
    return (
      <form>
        <div className="input-container">
            <label htmlFor="school">School</label>
            <input
              name="school"
              onChange={this.props.handleChange}
              id={this.props.id}
              value={data.school}
            />
        </div>

        <div className="input-container">
            <label htmlFor="degree">Degree</label>
            <input
              name="degree"
              onChange={this.props.handleChange}
              id={this.props.id}
              value={data.degree}
            />
        </div>

        <div className="dates-container">
            <label htmlFor="from">from</label>
            <input
              type="number"
              name="from"
              onChange={this.props.handleChange}
              id={this.props.id}
              value={data.from}
            />
            <label htmlFor="to">to</label>
            <input
              type="number"
              name="to"
              onChange={this.props.handleChange}
              id={this.props.id}
              value={data.to}
            />
        </div>

        <button id={this.props.id} onClick={this.props.deleteEdu}>
          Delete
        </button>
      </form>
    );
  }
}

export default Education;
