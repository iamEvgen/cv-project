import React from "react";


class RenderCV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="renderCV">
        <p>name: {this.props.allInfo.name}</p>
        <p>position: {this.props.allInfo.position}</p>
        <p>phone: {this.props.allInfo.phone}</p>
        <p>email: {this.props.allInfo.email}</p>
        <p>location: {this.props.allInfo.location}</p>
        <p>description: {this.props.allInfo.description}</p>
      </div>
    )
  }
}

export default RenderCV