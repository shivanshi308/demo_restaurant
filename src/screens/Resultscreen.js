import React, {useState,useEffect} from 'react'
import {View, Text, StyleSheet, Image, ScrollView,SafeAreaView, FlatList} from 'react-native'
import zomato from '../api/zomato'
import { YellowBox } from 'react-native'





const Resultscreen= ({navigation})=>{

    const id=navigation.getParam('id')
    const [result,setResult]=useState(null)

    //console.log(result)

    const getResult= async (id)=>{
        const res=await zomato.get(`/restaurant?&res_id=${id}`)
        setResult(res.data)
       // console.log(res.data)
    }

    useEffect(()=>{
        getResult(id)
    },[])

    if(!result){  // do not show anything unless we actuallly have value in result
        return null;
    }

    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
      ])

    return(
        <>
            <View>
            <ScrollView>
            <Text style={styles.titlestyle}>{result.name}</Text>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: result.featured_image}}/>
            </View> 
                <Text style={styles.name}>Cuisines</Text>
                <Text>{result.cuisines}</Text>
                <Text style={styles.name}>Timings</Text>
                <Text>{result.timings}</Text>
                <Text style={styles.name}>Highlights :</Text>
                <FlatList
                    data={result.highlights}
                    keyExtractor={it => it}
                    renderItem={({ item }) => {
                        return <Text>{item}</Text>;
                    }}
                />
            </ScrollView>
            </View>
        
        </>
    )
}

const styles = StyleSheet.create(
    { 
        container:{
            height: 300,
            width:300,
            flexDirection:'column',
            marginLeft:5
        },
        titlestyle:{
            fontWeight:'bold',
            alignItems: 'center',
            marginBottom:10,
            marginLeft:5
        },
        name:{
            textDecorationStyle:'dotted',
            fontWeight:'bold',
            marginBottom:5,
            marginTop:5,
            marginLeft:5
        },
        image: {
            flex:1,
            marginBottom: 10,
            marginTop:10,
            resizeMode:'cover',
        }
    }
)

export default Resultscreen;