import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
    this.changeUserName = this.changeUserName.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  changeUserName(event) {
    this.setState({ userName: event.target.value });
  }

  handleChangeName() {
    this.props.updateUserName(this.state.userName)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {console.log(this.props)}
          <p>Esta é uma página que você deve escrever sobre você</p>
          <p>Eu sou um {this.props.user.employerInfo.carrer}</p>
          <p>Esse é o {this.props.user.personalInfo.name}</p>
          <div>
            <h1>Mudar nome do usuário</h1>
            <div>
              <input 
                type="text"
                placeholder="digite o novo usuário"
                onChange={this.changeUserName}
                value={this.state.userName}
              />
              <button
                type="button"
                onClick={this.handleChangeName}
              >Mudar nome</button>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default About;
