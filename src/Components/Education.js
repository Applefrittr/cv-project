import { Component } from "react";

class Education extends Component {
  render() {
    return (
      <form>
        <label htmlFor="school">School</label>
        <input
          name="school"
          onChange={this.props.handleChange}
          id={this.props.id}
        />

        <label htmlFor="degree">Degree</label>
        <input
          name="degree"
          onChange={this.props.handleChange}
          id={this.props.id}
        />

        <label htmlFor="from">from</label>
        <input
          type="number"
          name="from"
          onChange={this.props.handleChange}
          id={this.props.id}
        />

        <label htmlFor="to">to</label>
        <input
          type="number"
          name="to"
          onChange={this.props.handleChange}
          id={this.props.id}
        />

        <button id={this.props.id} onClick={this.props.deleteEdu}>
          Delete
        </button>
      </form>
    );
  }
}

export default Education;
