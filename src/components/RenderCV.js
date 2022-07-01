import React from "react";
import RenderHeader from "./RenderHeader";
import RenderEducation from "./RenderEducation";
import RenderPractice from "./RenderPractice";


class RenderCV extends React.Component {
  render() {
    return (
      <div className="renderCV">
        <RenderHeader allInfo={this.props.allInfo} />
        <RenderEducation education={this.props.allInfo.education} />
        <RenderPractice practice={this.props.allInfo.practice} />
      </div>
    )
  }
}

export default RenderCV