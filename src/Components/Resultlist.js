import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'


const Resultlist= ({title, results})=>{

   // console.log(results)

    //  results.map((item) => {
    //     //We need to return the corresponding mapping for each item too.
    //     console.log(item.restaurant)
    //    }
    if(!results.length){
        console.log("empty results")
    }
    
    return(
        <View style={styles.container}>
            
            <Text style={styles.titlestyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.restaurant.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={() => console.log("Item pressed")}>
                            <ResultsDetail result={item.restaurant} />
                        </TouchableOpacity>
                      )
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create(
    { 
        titlestyle:{
            fontSize: 18,
            fontWeight: 'bold'
        },
        container: {
            marginBottom: 10
          }

    }
)

export default Resultlist;