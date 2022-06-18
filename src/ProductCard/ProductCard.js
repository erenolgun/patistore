import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.footer_container}>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductCard;
