import React from 'react';
import { Card, Col, Image } from 'react-bootstrap'

const CoinCurrency = props => {

   const { name, price, image } = props;

   return <>
      <Col md={4} sm={6} lg={3} className="mt-4">
         <Card className="text-center">
            <Image className='img-cripto' src={image.default} roundedCircle />
            <Card.Body>
               <Card.Title className="capitalize"><span className="font-weight-bold">{name} / ARS</span></Card.Title>
               <Card.Text className="capitalize">{price}</Card.Text>
            </Card.Body>
         </Card>
      </Col>
   </>
}

export default CoinCurrency;