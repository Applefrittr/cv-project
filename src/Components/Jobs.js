import { Component } from "react";

class Jobs extends Component {
  render() {
    const data = this.props.data
    return (
      <form>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            name="company"
            onChange={this.props.handleChange}
            id={this.props.id}
            value={data.company}
          />
        </div>

        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            onChange={this.props.handleChange}
            id={this.props.id}
            value={data.title}
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

        <div className="input-container">
          <label htmlFor="duties">Duties</label>
          <textarea name="duties" onChange={this.props.handleChange} id={this.props.id} value={data.duties}></textarea>
        </div>

        <button id={this.props.id} onClick={this.props.deleteWork}>
          Delete
        </button>
      </form>
    );
  }
}

export default Jobs;
