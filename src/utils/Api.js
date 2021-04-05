import axios from 'axios';

const API_URL_CRIPTO = process.env.REACT_APP_CRIPTO_API_BASE;
const API_URL_COIN = process.env.REACT_APP_COIN_API_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCriptoPriceById = async (currency) => {
    const response = await axios.get(`${API_URL_CRIPTO}coins/${currency}`).catch(err => {
        console.log(err);
    });

    return response.data;
}

export const getCoinPriceByCod = async (coin) => {
    const response = await axios.get(`${API_URL_COIN}from=${coin}&to=ARS`, {params : { 'quantity': 1, 'key': API_KEY, json: true}}).catch( err => {
        console.log(err);
    });
    
    return response.data;
}







