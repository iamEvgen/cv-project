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
          onEduChange={this.props.onEduChange}
          onAddEducation={this.props.onAddEducation}
          onDeleteEducation={this.props.onDeleteEducation}
        />
        <PracticalExperience 
          practice={this.props.allInfo.practice}
          onPracticeChange={this.props.onPracticeChange}
          onAddPractice={this.props.onAddPractice}
          onDeletePractice={this.props.onDeletePractice}
        />
      </form>
    )
  }
}

export default InputForm;