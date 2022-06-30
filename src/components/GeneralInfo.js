import React from "react";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="Info">
        <h2>General info</h2>
        <input 
          type='text'
          placeholder="Name"
          name="name"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.name}
        />
        <input 
          type='text'
          placeholder="Position"
          name="position"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.position}
        />
        <input 
          type='text'
          placeholder="Phone"
          name="phone"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.phone}
        />
        <input 
          type='email'
          placeholder="Email"
          name="email"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.email}
        />
        <input 
          type='text'
          placeholder="Location"
          name="location"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.location}
        />
        <textarea
          rows="5"
          placeholder="Description"
          name="description"
          onChange={this.props.onGeneralInfoChange}
          value={this.props.description}
        />
      </div>
    )
  }
}

export default GeneralInfo;