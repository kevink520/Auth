import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  handleLogout() {
    this.setState({
      loggedIn: false,
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={this.handleLogout} text={'Log out'} />;
      case false:
        return <LoginForm />;
      default:
        <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
