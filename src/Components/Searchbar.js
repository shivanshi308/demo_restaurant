import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
//import { TextInput } from 'react-native-gesture-handler'

const Searchbar= ({word, onWordChange, onWordSubmit})=>{

    return(
        <View>
            <View style={styles.bar}>
                <Feather name='search' style={{fontSize:25, alignSelf:"center", marginHorizontal: 10}}/> 
                <TextInput 
                    style={styles.input}
                    placeholder='Find something...'
                    autoCapitalize='none'
                    value={word}
                    onChangeText={(newText)=>onWordChange(newText)}
                    onEndEditing={(newText)=>onWordSubmit(newText)}
                />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    { 
        bar:{
            marginTop:15,
            backgroundColor: 'gray',
            height:50,
            borderRadius: 5,
            marginHorizontal: 15,
            flexDirection: 'row',
        },
        input:{
            flex:1,
        }
    }
)

export default Searchbar;