import React from "react";
import InputForm from './components/InputForm'
import RenderCV from './components/RenderCV'
import uniqid from "uniqid";
import './style.css'
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
      phone: '',
      email: '',
      location: '',
      description: '',
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
      practice: []
    }

    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handlePracticeChange = this.handlePracticeChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addPractice = this.addPractice.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deletePractice = this.deletePractice.bind(this);
  }

  handleGeneralInfoChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEduChange(event, id) {
    const oldEducation = [...this.state.education]
    const newEducation = oldEducation.map((item) => {
      if (item.id !== id) return item
      else {
        const newItem = {...item};
        newItem[event.target.name] = event.target.value;
        return newItem;
      }
    })
    this.setState({
      education: newEducation
    })
  }

  handlePracticeChange(event) {
    const oldPractice = [...this.state.practice];
  }

  addEducation() {
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
  }

  deleteEducation(id) {
    console.log(id);
    const oldEducation = [...this.state.education];
    const newEducation = oldEducation.filter((item) => {
      return item.id === id ? false : true;
    })
    this.setState({
      education: newEducation
    })
  }

  addPractice() {
  }

  deletePractice(id) {
  }

  render() {
    return (
      <div className="App">
        <InputForm 
          allInfo={this.state}
          onGeneralInfoChange={this.handleGeneralInfoChange}
          onEduChange={this.handleEduChange}
          onPracticeChange={this.handlePracticeChange}
          onAddEducation={this.addEducation}
          onAddPractice={this.addPractice}
          onDeleteEducation={this.deleteEducation}
          onDeletePractice={this.deletePractice}
        />
        <RenderCV 
          allInfo={this.state}
        />
      </div>
    );
  }
}

export default App;
