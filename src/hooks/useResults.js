import React, {useState, useEffect} from 'react'
import zomato from '../api/zomato'

export default()=>{

    const [results, setResults]= useState([])
    const [error, setError]=useState('')

    const searchAPI= async (searchTerm)=>{

        try{
            const res= await zomato.get(`/search?&entity_id=4&entity_type=city&q=${searchTerm}`)
            
            // res.data will give all array of objects
            setResults(res.data.restaurants)
            //console.log(res.data.restaurants)
        }
        catch(err){
           // console.log(err)
            setError('Something went wrong!')
        }
        
    }

    useEffect(()=>{           //render this search only when component first renders
        searchAPI('pizza')
    },[])

    return [searchAPI, results, error]

}

