import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


//this component is to render every single elemnet inside the results array rendered by flatlist
const ResultsDetail = ({ result }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.thumb }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>
          {result.user_rating.aggregate_rating} Stars,  {result.all_reviews_count} Reviews
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginLeft: 15
    },
    image: {
      width: 200,
      height: 120,
      borderRadius: 4,
      marginBottom: 5
    },
    name: {
      fontWeight: 'bold'
    }
  });

  export default ResultsDetail;