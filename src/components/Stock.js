import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={() => props.purchaseStock(props.stock)}>
        <h5 className="card-title"> {props.stock.name}: </h5>
        <p className="card-text"> $ {props.stock.price} </p>
      </div>
    </div>


  </div>
);

export default Stock
//* allow a user to buy a stock by clicking on it and when it is bought, it should be added to `My Portfolio`.
//* allow a user to sell a stock in their `Portfolio` by clicking on the stock and it should be removed from their `Portfolio`.