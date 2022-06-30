import React from "react";
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'
import PracticalExperience from './PracticalExperience'

class InputForm extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <form className="inputForm">
        <GeneralInfo 
          name={this.props.allInfo.name}
          position={this.props.allInfo.position}
          phone={this.props.allInfo.phone}
          email={this.props.allInfo.email}
          location={this.props.allInfo.location}
          description={this.props.allInfo.description}
          onInputChange={this.props.onInputChange}
        />
        <EducationalExperience />
        <PracticalExperience />
      </form>
    )
  }
}

export default InputForm;