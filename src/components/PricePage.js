import React, { useEffect, useState } from 'react'
import { getCriptoPriceById, getCoinPriceByCod } from '../utils/Api'
import Section from './Section';
import { Spinner } from 'react-bootstrap';
import BRL from '../img/BRL.png';
import CLP from '../img/CLP.png';
import EUR from '../img/EUR.png';
import USD from '../img/USD.png';
const PricePage = () => {

    const [currencies, setCurrencies] = useState([]);
    const [coins, setCoins] = useState([]);
    const [currencyPrice, setCurrencyPrice] = useState('usd');

    const CURRENCIES = ['bitcoin', 'dogecoin', 'ripple', 'ethereum', 'cardano', 'binancecoin', 'filecoin', 'polkadot']
    const COINS = ['EUR', 'CLP', 'USD', 'BRL']
    const CURRENCIES_PRICE = ['ars', 'brl', 'clp', 'eur', 'usd']
    const IMAGES = [BRL, CLP, EUR, USD]

    const getCurrency = async () => {
        const currencyComplete = await Promise.all(CURRENCIES.map(async (curr) => {
            const currencyDataApi = await getCriptoPriceById(curr);
            return {
                "name": curr,
                "abbreviation": currencyDataApi.symbol,
                "price": currencyDataApi.market_data.current_price[currencyPrice],
                "currencyChange": currencyPrice.toUpperCase(),
                "marketDay": currencyDataApi.market_data.price_change_24h,
                "marketWeekly": currencyDataApi.market_data.price_change_percentage_7d,
                "image": currencyDataApi.image.large
            }
        }));
        
        const aux = [{
            titleText: 'CRIPTO',
            currencies: currencyComplete
        }]

        setCurrencies(aux);
        
    }

    const getCoin = async () => {
        const coinComplete = await Promise.all(COINS.map(async (coin) => {
            const coinDataApi = await getCoinPriceByCod(coin);
            return {
                "name": coin,
                "price": coinDataApi.result.toFixed(2),
                "image": require(`../img/${coin}.png`)
            }
        }));
        
        const aux = [{
            titleText: 'MONEDA',
            currencies: coinComplete
        }]

        setCoins(aux);
        
    }

    useEffect(async () => {
        getCurrency();
        getCoin();
    },[currencyPrice])

    return (
        <div>
            <div className="d-flex justify-content-around navbar-page mb-3">
                <div className="mt-3">
                    <h1 className="text-center font-weight-bold title-page pb-2">DIVISAS</h1>
                </div>

                <div className="mt-3">
                    <select value={currencyPrice} onChange={e => setCurrencyPrice(e.target.value)}>
                        {
                            CURRENCIES_PRICE.map((curr, index) => <option className="text-uppercase" key={index} value={curr}>{curr.toUpperCase()}</option>)
                        }
                    </select>
                </div>
            </div>

            {
                
                currencies.length > 0 ?
                    <>
                        {
                            currencies.map((item, index) => <Section key={index} {...item} />)
                        }
                    </>
                    :
                    <div className="d-flex justify-content-center">
                        <Spinner  animation="border" variant="secondary" />
                    </div>  
            }
            {
                
                coins.length > 0 ?
                    <>
                        {
                            coins.map((item, index) => <Section key={index} {...item} />)
                        }
                    </>
                    :
                    <div className="d-flex justify-content-center">
                        <Spinner  animation="border" variant="secondary" />
                    </div>  
            }
        </div>
    )
}

export default PricePage;


// const CRIPTOS = [{
//     "name": "Bitcoin",
//     "abbreviation": "BTC",
//     "price": 55.000,
//     "currencyChange": "USD",
//     "image": ""
// }, {
//     "name": "Dogecoin",
//     "abbreviation": "DOGE",
//     "price": 0.69,
//     "currencyChange": "USD",
//     "image": ""
// }, {
//     "name": "Ripple",
//     "abbreviation": "XRP",
//     "price": 0.50,
//     "currencyChange": "USD",
//     "image": ""
// }, {
//     "name": "Ethereum",
//     "abbreviation": "ETH",
//     "price": 1769,
//     "currencyChange": "USD",
//     "image": ""
// }];

// const CURRENCY = [{
//     "name": "Dollar",
//     "abbreviation": "USD",
//     "price": 150,
//     "currencyChange": "AR$",
//     "image": ""
// }, {
//     "name": "Euro",
//     "abbreviation": "EUR",
//     "price": 108,
//     "currencyChange": "AR$",
//     "image": ""
// }, {
//     "name": "Real",
//     "abbreviation": "BRL",
//     "price": 16.20,
//     "currencyChange": "AR$",
//     "image": ""
// }, {
//     "name": "Peso Chileno",
//     "abbreviation": "CLP",
//     "price": 0.13,
//     "currencyChange": "AR$",
//     "image": ""
// }];

// const MOCKDATA = [{
//     titleText: "Cripto",
//     currencies: CRIPTOS
// }, {
//     titleText: "Divisas",
//     currencies: CURRENCY
// }]
