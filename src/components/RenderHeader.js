import React from "react";

class RenderHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="name">{this.props.allInfo.name}</h2>
        <div className="position">{this.props.allInfo.position}</div>
        <div className="phone">{this.props.allInfo.phone}</div>
        <div className="email">{this.props.allInfo.email}</div>
        <div className="location">{this.props.allInfo.location}</div>
        <div className="description">{this.props.allInfo.description}</div>
      </div>
    )
  }
}

export default RenderHeader;