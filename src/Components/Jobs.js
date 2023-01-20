import { Component } from "react";

class Jobs extends Component {
  render() {
    return (
      <form>
        <label htmlFor="company">Company</label>
        <input
          name="company"
          onChange={this.props.handleChange}
          id={this.props.id}
        />

        <label htmlFor="title">Title</label>
        <input
          name="title"
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

        <button id={this.props.id} onClick={this.props.deleteWork}>
          Delete
        </button>
      </form>
    );
  }
}

export default Jobs;
