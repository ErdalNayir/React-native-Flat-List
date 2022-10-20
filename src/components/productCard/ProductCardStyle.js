import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 5,
    borderRadius: 10,
    flex: 1,
  },

  textArea: {
    marginLeft: 10,
    marginBottom: 5,
    padding: 0,
  },

  productImage: {
    resizeMode: 'stretch',
    height: Dimensions.get('window').height / 4.25,
    width: Dimensions.get('window').width / 2.25,
    borderRadius: 10,
    margin: 10,
  },

  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },

  price: {
    color: '#838484',
    fontWeight: 'bold',
    fontSize: 19,
  },

  isStock: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FF0000',
    fontSize: 18,
  },
});

export default styles;
