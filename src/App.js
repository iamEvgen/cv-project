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
      position: 'React.js Developer',
      phone: '+7 (007) 123-45-67',
      email: 'evgen@google.com',
      location: 'Russia, Tver',
      description: 'On the way to becoming a rock star in JavaScript',
      education: [
        {
          id: uniqid(),
          course: 'The Odin Project',
          university: 'The Odin Project',
          startDate: 2021,
          endDate: 2022,
          description: 'High quality coding education created by an Open-Source community.'
        },
        {
          id: uniqid(),
          course: 'Bachelor of Information Technology',
          university: 'University of Tampa, FL',
          startDate: 2008,
          endDate: 2013,
          description: 'React fundamentals (JSX, Virtual DOM, Native, Node.js) CI/CD & DevOps CSS, Git, Sigma Excellent Communicator Flux/Redux Team-oriented SEO Integration'
        }
      ],
      practice: [
        {
          id: uniqid(),
          company: 'BravDev',
          position: 'React Developer',
          startDate: 'April 2017',
          endDate: 'Present',
          description: "Used understanding of React fundamentals to promote better component lifecycle practices, increasing turnaround speed by 23% with 100% deadline adherence"
        },
        {
          id: uniqid(),
          company: 'ASPTech',
          position: 'Junior Javascript Developer',
          startDate: 'June 2013',
          endDate: 'July 2016',
          description: "Followed documentation to always remain up-to-speed on what needs to be updated in response to new release versions."
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
