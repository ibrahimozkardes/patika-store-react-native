import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCards.style';

const ProductCards = ({products}) => {
  const inStock = products.inStock ? null : 'STOKTA YOK';
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: products.imgURL}}
        resizeMode="contain"
      />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      <Text style={styles.inStock}>{inStock}</Text>
    </View>
  );
};

export default ProductCards;
