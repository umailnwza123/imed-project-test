import axios from "axios";


export  const fetchAllNobelPrice = () => {

    let request = axios({
        method: 'GET',
        url: 'http://localhost:5000/nobelPrize',

    })
    .then((res)=>{
        console.log('res', res)
    })
    // axios.get('http://api.nobelprize.org/2.1/nobelPrizes')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response)
    //         //console.log(response.data.nobelPrizes);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
}