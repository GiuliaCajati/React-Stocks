import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = "http://localhost:3000/stocks"
class App extends Component {
  constructor() {
    super()
    this.state = {
      portfolioIds:[],
      stocksArray: [],
      filter: "All",
      sort: "None"
    }
  }

  componentDidMount() {
    fetch(API)
    .then(data => data.json())
    .then(stocks => this.setState({
      stocksArray: stocks
    }))
  }


   purchaseStock = (purchasedStockId) => {
    if(!this.state.portfolioIds.find(portfolioId => portfolioId === purchasedStockId))
    {this.setState({
      portfolioIds: [...this.state.portfolioIds, purchasedStockId]
    })}
  }

  sellStock = (soledStockId) => {
    //go through portfolioId array remove any that match soledStockId
    this.setState({
      portfolioIds: this.state.portfolioIds.filter(soldStock => soldStock !== soledStockId)
    })
  }

  filterStocks = filterValue  => {
    this.setState({ filter: filterValue })
  }
  sortStocks = sortValue => {
    this.setState({ sort: sortValue })
  }

  displayStocks = () => {
    let filteredStocks = [...this.state.stocksArray] //all stocks 
    if(this.state.filter !== "All"){
      return filteredStocks.filter(stock => stock.type === this.state.filter) // type: Tech or Sportswear or Finance
    }
    switch(this.state.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
        return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }

  }


  render() {
    //return portfolio data from array of Ids
    let portfolioData = this.state.portfolioIds.map(id => this.state.stocksArray.find(stock => (stock.id === id)))
    //return stock array based on filter/sort
    let displayStocks = this.displayStocks()

    return (
      <div>
        <Header/>
        <MainContainer

        //filtered stocks array: Used in the StockContainer
        stocksArray={displayStocks}

        //portfolio array: Used in the PortfolioContainer
        portfolioData={portfolioData}

        //function to filterStocks: Used in the SearchBar
        filterStocks={this.filterStocks}

        //function to sortStocks: Used in the SearchBar
        sortStocks={this.sortStocks}

        //function to sellStock: Used in the PortfolioContainer
        sellStock={this.sellStock} 

        //function to purchaseStock: Used in the StockContainer
        purchaseStock ={this.purchaseStock}/>
      </div>
    );
  }
}

export default App;


 