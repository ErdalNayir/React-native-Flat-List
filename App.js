import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import MainPage from './src/views/MainPage/MainPage';

const App = () => {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
