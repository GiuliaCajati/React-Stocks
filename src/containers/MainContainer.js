import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.props.filterStocks}
          sortStocks={this.props.sortStocks}/>

          <div className="row">
            <div className="col-8">

            <StockContainer 
              filteredStocks={this.props.filteredStocks} 
              stocksArray ={this.props.stocksArray} 
              purchaseStock ={this.props.purchaseStock}/>
            
            </div>

            <div className="col-4">
            <PortfolioContainer portfolioData={this.props.portfolioData} sellStock={this.props.sellStock}/>
            
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
