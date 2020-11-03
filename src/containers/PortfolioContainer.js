import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.portfolioStocks.map(portfolioStock => 
          <div className="card">
            <div className="card-body" onClick={() => this.props.sellStock(portfolioStock)}> 
              <h5 className="card-title"> {portfolioStock.name}</h5> 
              <p className="card-text">{portfolioStock.price}</p>
              </div>
              </div>)}
      </div>
    );
  }

}

export default PortfolioContainer;
