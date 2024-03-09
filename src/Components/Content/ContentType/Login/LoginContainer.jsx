import { connect } from 'react-redux';
import Login from './Login';
import React, { Component } from 'react';
import { loginThunkCreator } from '../../../../Reducers/auth-reducer';


class LoginContainer extends Component {
  
  componentDidMount() {
  }

  login= (login, password) => {
    this.props.loginThunkCreator(login,password);
  }

  render() {
    return (
      <Login
      login={this.login}

      />
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
  loginThunkCreator
})(LoginContainer);;  