// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    formEmpty: true,
    firstNameEmpty: false,
    lastNameEmpty: false,
  }

  onBlurFirstName = event => {
    if (event.target.value !== '') {
      this.setState({firstName: event.target.value, firstNameEmpty: false})
    } else {
      this.setState({firstNameEmpty: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value !== '') {
      this.setState({lastName: event.target.value, lastNameEmpty: false})
    } else {
      this.setState({lastNameEmpty: true})
    }
  }

  onSubmitForm = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        firstName: '',
        lastName: '',
        formEmpty: false,
        firstNameEmpty: false,
        lastNameEmpty: false,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({formEmpty: true, firstNameEmpty: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({formEmpty: true, lastNameEmpty: true})
    } else {
      this.setState({
        formEmpty: true,
        firstNameEmpty: true,
        lastNameEmpty: true,
      })
    }
  }

  registerAgain = () => {
    this.setState({formEmpty: true})
  }

  renderFormSuccess = () => (
    <div className="sub-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p>Submitted Successfully</p>
      <div>
        <button type="button" onClick={this.registerAgain}>
          Submit another Response
        </button>
      </div>
    </div>
  )

  renderForm = () => {
    const {firstNameEmpty, lastNameEmpty} = this.state
    const isFirstNameEmpty = firstNameEmpty ? 'empty-name' : ''
    const isLastNameEmpty = lastNameEmpty ? 'empty-name' : ''
    return (
      <form className="sub-container" onSubmit={this.onSubmitForm}>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={`input-name ${isFirstNameEmpty}`}
          id="firstName"
          placeholder="First Name"
          onBlur={this.onBlurFirstName}
        />
        {firstNameEmpty && <p className="error-msg">Required</p>}
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={`input-name ${isLastNameEmpty}`}
          id="lastName"
          placeholder="LastName"
          onBlur={this.onBlurLastName}
        />
        {lastNameEmpty && <p className="error-msg">Required</p>}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {formEmpty} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {formEmpty ? this.renderForm() : this.renderFormSuccess()}
      </div>
    )
  }
}

export default RegistrationForm
