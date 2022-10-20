import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from 'PatikaStore/src/components/productCard/ProductCardStyle.js';

const productCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={{uri: product.imgURL}} />
      <View style={styles.textArea}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.isStock}>
          {product.inStock == false ? 'Stokta Yok' : ''}
        </Text>
      </View>
    </View>
  );
};

export default productCard;
