import React from "react";

function RenderHeader(props) {
  return (
    <div className="header">
      <h2 className="name">{props.allInfo.name}</h2>
      <div className="position">{props.allInfo.position}</div>
      <div className="phone">{props.allInfo.phone}</div>
      <div className="email">{props.allInfo.email}</div>
      <div className="location">{props.allInfo.location}</div>
      <div className="description">{props.allInfo.description}</div>
    </div>
  )
}

export default RenderHeader;