import React from "react";
import InputForm from './components/InputForm'
import RenderCV from './components/RenderCV'
import uniqid from "uniqid";
import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Evgeny Sergeev',
      position: 'React Frontend Developer',
      phone: '8 (915) 70-30-200',
      email: 'evgen.alexa@gmail.com',
      location: 'Russia, Tver',
      description: 'On the way to becoming a rock star in JavaScript',
      education: [
        {
          id: uniqid(),
          course: '1234',
          university: '50CC',
          startDate: 2011,
          endDate: 2018,
          description: 'some description #1 will be here'
        },
        {
          id: uniqid(),
          course: '2345',
          university: '69CC',
          startDate: 2015,
          endDate: 2019,
          description: 'some description #2 will be here'
        }
      ],
      practice: [
        {
          id: uniqid(),
          company: 'Apple',
          position: 'CEO',
          startDate: '1995',
          endDate: '1998',
          description: 'some description #3 will be here'
        }
      ]
    }

    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.addFields = this.addFields.bind(this);
    this.deleteFields = this.deleteFields.bind(this);
  }

  handleGeneralInfoChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputsChange(event, id, fieldset) {
    const oldArr = [...this.state[fieldset]]
    const newArr = oldArr.map((item) => {
      if (item.id !== id) return item
      else {
        const newItem = {...item};
        newItem[event.target.name] = event.target.value;
        return newItem;
      }
    })
    this.setState({
      [fieldset]: newArr
    })
  }

  addFields(fieldset) {
    if (fieldset === 'education') {
      const newEducation = {
        id: uniqid(),
        course: '',
        university: '',
        startDate: '',
        endDate: '',
        description: ''
      }
      this.setState({
        education: this.state.education.concat(newEducation)
      })
    } else if (fieldset === 'practice') {
      const newPractice = {
        id: uniqid(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
      this.setState({
        practice: this.state.practice.concat(newPractice)
      })
    }
  }

  deleteFields(id, fieldset) {
    const oldArr = [...this.state[fieldset]];
    const newArr = oldArr.filter((item) => {
      return item.id === id ? false : true;
    })
    this.setState({
      [fieldset]: newArr
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm 
          allInfo={this.state}
          onGeneralInfoChange={this.handleGeneralInfoChange}
          onInputsChange={this.handleInputsChange}
          onAddFields={this.addFields}
          onDeleteFields={this.deleteFields}
        />
        <RenderCV 
          allInfo={this.state}
        />
      </div>
    );
  }
}

export default App;
