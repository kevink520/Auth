import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 2,
    flexBasis: '66.66%',
    maxWidth: '66.66%',
    height: 40,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#f0f0f0',
    fontSize: 18,
    lineHeight: 23,
  },

  labelStyle: {
    flex: 1,
    flexBasis: '33.33%',
    maxWidth: '33.33%',
    height: 23,
    paddingLeft: 20,
    fontSize: 18,
  },

  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export { Input };

