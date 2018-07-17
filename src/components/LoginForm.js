import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    const { email, password } = this.state;
    this.setState({
      email: '',
      password: '',
      loading: true,
      error: '',
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({
              loading: false,
            });
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: 'Could not authenticate.',
            });
          });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    }

    return (
      <Button 
        text={'Log in'}
        onPress={this.handleButtonPress} />
    );
  }

  render() {
    return (
      <Card>
        <Input
          label={'Email'} 
          value={this.state.email}
          onChangeText={email => this.setState({email})} />
        <Input
          secureTextEntry
          label={'Password'}
          value={this.state.password}
          onChangeText={password => this.setState({password})} />
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        {this.renderButton()}
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00',
  },
});

export default LoginForm;

