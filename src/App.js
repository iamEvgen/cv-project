import React from "react";
import InputForm from './components/InputForm'
import RenderCV from './components/RenderCV'
import './style.css'

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
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm 
          allInfo={this.state}
          onInputChange={this.handleInputChange}
        />
        <RenderCV />
      </div>
    );
  }
}

export default App;
