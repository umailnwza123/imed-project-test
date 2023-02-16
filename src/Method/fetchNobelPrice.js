import axios from "axios";


export  const fetchAllNobelPrice = () => {

    let request = axios({
        method: 'GET',
        url: 'http://localhost:5000/nobelPrize',

    })
    .then((res)=>{
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
    return request
}