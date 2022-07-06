import React from "react";
import RenderHeader from "./RenderHeader";
import RenderEducation from "./RenderEducation";
import RenderPractice from "./RenderPractice";


function RenderCV(props) {
  return (
    <div className="renderCV">
      <RenderHeader allInfo={props.allInfo} />
      <RenderPractice practice={props.allInfo.practice} />
      <RenderEducation education={props.allInfo.education} />
    </div>
  )
}

export default RenderCV