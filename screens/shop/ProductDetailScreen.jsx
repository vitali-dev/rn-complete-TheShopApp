import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailSceen = props => {
  const productId = props.route.params ? props.route.params.productId : null;
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: navData.route.params.productTitle,
  };
};

const styles = StyleSheet.create({});

export default ProductDetailSceen;
