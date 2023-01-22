import { Component } from "react";

class Jobs extends Component {
  render() {
    return (
      <form>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            name="company"
            onChange={this.props.handleChange}
            id={this.props.id}
          />
        </div>

        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            onChange={this.props.handleChange}
            id={this.props.id}
          />
        </div>

        <div className="dates-container">
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
        </div>

        <div className="input-container">
          <label htmlFor="description">Duties</label>
          <textarea name="description" onChange={this.props.handleChange}></textarea>
        </div>

        <button id={this.props.id} onClick={this.props.deleteWork}>
          Delete
        </button>
      </form>
    );
  }
}

export default Jobs;
