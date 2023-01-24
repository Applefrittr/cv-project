import { Component } from "react";

class GeneralInfo extends Component {

  render() {
    const data = this.props.data

    return (
      <form>
        <div className="input-container">
          <label htmlFor="name" >Name</label>
          <input name="name" onChange={this.props.handleChange} value={data.name}></input>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.props.handleChange} value={data.email}></input>
        </div>

        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" onChange={this.props.handleChange} value={data.phone}></input>  
        </div>

        <div  className="input-container">
          <label htmlFor="about">About</label>
          <textarea name="about" onChange={this.props.handleChange} value={data.about}/>
        </div>
      </form>
    )
  }
}

export default GeneralInfo;
