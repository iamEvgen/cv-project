import React from "react";
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'
import PracticalExperience from './PracticalExperience'

function InputForm(props) {
  return (
    <form onSubmit={(event) => {event.preventDefault()}} className="inputForm">
      <GeneralInfo 
        name={props.allInfo.name}
        position={props.allInfo.position}
        phone={props.allInfo.phone}
        email={props.allInfo.email}
        location={props.allInfo.location}
        description={props.allInfo.description}
        onGeneralInfoChange={props.onGeneralInfoChange}
      />
      <PracticalExperience 
        practice={props.allInfo.practice}
        onInputsChange={props.onInputsChange}
        onAddFields={props.onAddFields}
        onDeleteFields={props.onDeleteFields}
      />
      <EducationalExperience
        education={props.allInfo.education}
        onInputsChange={props.onInputsChange}
        onAddFields={props.onAddFields}
        onDeleteFields={props.onDeleteFields}
      />
    </form>
  )
}

export default InputForm;