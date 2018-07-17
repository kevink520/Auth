import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CardSection = ({style, children}) => (
  <View style={style || styles}>
    {children}
  </View>
);

const styles = StyleSheet.create({});

export { CardSection };

