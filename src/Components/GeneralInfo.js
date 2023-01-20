import { Component } from "react";

class GeneralInfo extends Component {

  render() {
    return (
      <form>
        <label htmlFor="name" >Name</label>
        <input name="name" onChange={this.props.handleChange}></input>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={this.props.handleChange}></input>

        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" onChange={this.props.handleChange}></input>
        
        <label htmlFor="about">About</label>
        <input type="textarea" name="about" onChange={this.props.handleChange} />
      </form>
    )
  }
}

export default GeneralInfo;
