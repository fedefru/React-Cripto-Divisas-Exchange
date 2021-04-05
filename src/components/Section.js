import React from 'react';
import { Row, Jumbotron } from 'react-bootstrap'
import CardCurrency from './CardCurrency';
import CoinCurrency from './CoinCurrency';

const Section = props => {

        const { titleText, currencies } = props;

        return <>
                <Jumbotron className="pt-2">
                        <h2 className="text-center font-weight-bold title-currency">{titleText}</h2>
                        <Row>
                                {
                                        titleText === 'CRIPTO' ?
                                        currencies.map((currency, index) =>
                                                <CardCurrency key={index} {...currency} />
                                        )
                                        :
                                        currencies.map((currency, index) =>
                                                <CoinCurrency key={index} {...currency} />
                                        )
                                }
                        </Row>
                </Jumbotron>
        </>
}

export default Section;