import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = (props) => {
  return <RNTextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default TextInput;
