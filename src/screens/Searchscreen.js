import React, {useState,} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import Searchbar from '../Components/Searchbar'
import Resultlist from '../Components/Resultlist'
import useResults from '../hooks/useResults'

const Searchscreen= ()=>{

    const [word, setWord]=useState('')
    const [searchAPI, results, error]=useResults();

    //console.log(results.resturant)

    const filterByPrice= (price)=>{
        //price - price_range object from json in zomato
        return results.filter( result=>{

            return result.restaurant.price_range === price
        })
    }
    
    return(

        <>
            <Text>Search Screen</Text>
            <Searchbar
                word={word}
                onWordChange={setWord}
                onWordSubmit={()=>searchAPI(word)}
            />  
            {error ? <Text>{error}</Text> : null}
            <Text>We found {results.length} results</Text>
            <ScrollView>
            <Resultlist 
                title="Cost effective"
                results={filterByPrice('2')}
                />
            <Resultlist 
                title="Bit pricier"
                results={filterByPrice('3')}
                />
            <Resultlist
                title="Big spender"
                results={filterByPrice('4')}
                />
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create(
    { 

    }
)

export default Searchscreen;