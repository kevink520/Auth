import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({children}) => (
  <View style={styles.card}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    minHeight: 120,
    justifyContent: 'flex-start',
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    elevation: 1,
  },
});

export { Card };

