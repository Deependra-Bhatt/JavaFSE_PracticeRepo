import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5 ? 'Full Name must be at least 5 characters long!' : '';
        break;
      case 'email':
        const validEmailRegex=RegExp(/^(([^<>()\[\]\.,;:\s@\'']+(\.[^<>()\[\]\.,;:\s@\'']+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\'']+\.)+[^<>()[\]\.,;:\s@\'']{2,})$/i);
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be at least 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  validateForm = (errors) => {
    return Object.values(errors).every((err) => err === '');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {errors}=this.state;

    if (this.validateForm(errors)) {
      alert('Valid Form');
    } else {
      if (errors.fullName !== '') alert(errors.fullName);
      if (errors.email !== '') alert(errors.email);
      if (errors.password !== '') alert(errors.password);
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ color: 'red' }}>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Name: <input type="text" name="fullName" onChange={this.handleChange} required/>
          </div>
          <br />
          <div>
            Email: <input type="email" name="email" onChange={this.handleChange} required/>
          </div>
          <br />
          <div>
            Password: <input type="password" name="password" onChange={this.handleChange} required/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
