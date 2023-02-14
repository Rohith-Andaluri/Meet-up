import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Registration from './components/Registration'
import NotFound from './components/NotFound'
import './App.css'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    registrationStatus: false,
    topic: 'ARTS_AND_CULTURE',
    showError: false,
    Name: '',
  }

  changeRegistrationStatus = () => {
    this.setState(prevState => ({
      registrationStatus: !prevState.registrationStatus,
    }))
  }

  updateError = () => {
    this.setState(prevState => ({showError: !prevState.showError}))
  }

  updateUserName = user => {
    this.setState({Name: user})
  }

  updateTopicName = topicName => {
    this.setState({topic: topicName})
  }

  render() {
    const {showError, registrationStatus, Name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          showError,
          registrationStatus,
          Name,
          topic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateError: this.updateError,
          updateUserName: this.updateUserName,
          updateTopicName: this.updateTopicName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
