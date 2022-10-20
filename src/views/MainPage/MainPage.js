import React from 'react';
import styles from 'PatikaStore/src/views/MainPage/MainPageStyle.js';

import {SafeAreaView, Text, View, TextInput, FlatList} from 'react-native';
import ProductCard from 'PatikaStore/src/components/productCard/ProductCard.js';
import product_data from 'PatikaStore/data/products.json';

const MainPage = () => {
  const renderProducts = ({item}) => <ProductCard product={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.appBar}>PATIKA STORE</Text>
      <TextInput style={styles.searchBar} placeholder="   Ara..."></TextInput>
      <FlatList
        maxToRenderPerBatch={4}
        initialNumToRender={10}
        numColumns={2}
        data={product_data}
        renderItem={renderProducts}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default MainPage;
