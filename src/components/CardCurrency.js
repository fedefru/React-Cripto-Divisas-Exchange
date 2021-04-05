import React from 'react';
import { Card, Col, Image } from 'react-bootstrap'

const CardCurrency = props => {

   const { name, abbreviation, price, currencyChange, marketDay, marketWeekly, image } = props;

   return <>
      <Col md={4} sm={6} lg={3} className="mt-4">
         <Card className="text-center">
         <Image className='img-cripto' src={image} roundedCircle />
            <Card.Body>
               <Card.Title className="capitalize"><span className="font-weight-bold">{name} </span><span className="font-italic text-lowercase">{abbreviation}</span></Card.Title>
               <Card.Text className="capitalize">{currencyChange} {price}</Card.Text>
               <hr></hr>
               <Card.Text className="capitalize">
                  <span className="timeMarket">24H </span><span className={"badge " +(marketDay > 0 ? "badge-success" : "badge-danger")}>{marketDay.toFixed(2)}%</span>
                  <span className="timeMarket">&nbsp;&nbsp;7D </span><span className={"badge " +(marketWeekly > 0 ? "badge-success" : "badge-danger")}>{marketWeekly.toFixed(2)}%</span>
               </Card.Text>
               
            </Card.Body>
         </Card>
      </Col>
   </>
}

export default CardCurrency;