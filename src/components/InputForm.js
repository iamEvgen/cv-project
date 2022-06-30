import React from "react";
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'
import PracticalExperience from './PracticalExperience'

class InputForm extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {event.preventDefault()}} className="inputForm">
        <GeneralInfo 
          name={this.props.allInfo.name}
          position={this.props.allInfo.position}
          phone={this.props.allInfo.phone}
          email={this.props.allInfo.email}
          location={this.props.allInfo.location}
          description={this.props.allInfo.description}
          onGeneralInfoChange={this.props.onGeneralInfoChange}
        />
        <EducationalExperience
          education={this.props.allInfo.education}
          onInputsChange={this.props.onInputsChange}
          onAddFields={this.props.onAddFields}
          onDeleteFields={this.props.onDeleteFields}
        />
        <PracticalExperience 
          practice={this.props.allInfo.practice}
          onInputsChange={this.props.onInputsChange}
          onAddFields={this.props.onAddFields}
          onDeleteFields={this.props.onDeleteFields}
        />
      </form>
    )
  }
}

export default InputForm;