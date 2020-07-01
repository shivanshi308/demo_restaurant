import axios from 'axios'

export default axios.create({

    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key': '7be346fe294f8babffc85d9387b754a3'
    }

})