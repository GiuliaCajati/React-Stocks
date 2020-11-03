import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = "http://localhost:3000/stocks"
class App extends Component {
  constructor() {
    super()
    let stocksArray = []
    this.state = {
      apiLoaded: false,
      portfolio:[],
      filteredStocks:[]
    }
  }

  componentDidMount() {
    fetch(API)
    .then(data => data.json())
    .then(stockInfo => {this.renderStocks(stockInfo)})
  }

  renderStocks = (stockInfo) => {
    this.stocksArray = stockInfo
    this.setState({
      apiLoaded: true,
      filteredStocks: stockInfo
    })
  }

   purchaseStock = (stock) => {
    //if stock already in portfolio do not dupe
    //passed to StockContainer 
    const updatedPortfolio = this.state.portfolio.filter(portfoliostock => portfoliostock.id !== stock.id);
    this.setState({
      portfolio: updatedPortfolio
    })
    this.setState({
      portfolio: [...updatedPortfolio, stock]
    })
  }

  sellStock = (stock) => {
    //scan through portfolio array remove ones that match stock.id 
    const updatedPortfolio = this.state.portfolio.filter(portfoliostock => portfoliostock.id !== stock.id);
    this.setState({
      portfolio: updatedPortfolio
    })
  }

  filterStocks = (filterValue) => {
    //filter Tech, Sportswear, Finance, All
    //passed to SeachBar 
    if(filterValue!=="All"){
       this.setState({
        filteredStocks: (this.stocksArray.filter(stock => stock.type === filterValue))
    })
    }else{
      this.setState({
        filteredStocks: this.stocksArray
    })
    }
  }


  sortStocks = (sortValue) =>{
    //passed to SeachBar 
    if (sortValue === "Alphabetically"){
      this.setState({
        filteredStocks: this.state.filteredStocks.sort((a,b) => a.ticker.localeCompare(b.ticker))
      })
    }else if(sortValue === "Price"){
      this.setState({
        filteredStocks: this.state.filteredStocks.sort((a,b) =>  a.price - b.price)
      })
    }
  }
  
  render() {
    return (
      <div>
        <Header  hello={"bob"}/>
        {this.state.apiLoaded?<MainContainer

        //filtered stocks array: held in the App used used in the StockContainer
        stocksArray={this.state.filteredStocks}

        //portfolio array: held in the App used used in the PortfolioContainer
        portfolio={this.state.portfolio}

        //function to filterStocks: runs in the App (called in the SearchBar)
        filterStocks={this.filterStocks}

        //function to sortStocks: runs in the App (called in the SearchBar)
        sortStocks={this.sortStocks}

        //function to sellStock: called in the PortfolioContainer
        sellStock={this.sellStock} 

        //function to purchaseStock: called in the StockContainer
        purchaseStock ={this.purchaseStock}/>:null}
      </div>
    );
  }
}

export default App;


// filterStocks = (filterValue) => {
//   console.log(filterValue)
//   if (filterValue === "Tech"){
//      //let techStocks = (this.stocksArray.filter(stock => stock.type == "Tech"))
//      this.setState({
//       filteredStocks: (this.stocksArray.filter(stock => stock.type === "Tech"))
//       //filteredStocks: [... this.state.filteredStocks, techStocks]
//     })
//   }else if(filterValue === "Sportswear"){
//      this.setState({
//       filteredStocks: (this.stocksArray.filter(stock => stock.type === "Sportswear"))
//     })
//   }else if(filterValue === "Finance"){
//      this.setState({
//       filteredStocks: (this.stocksArray.filter(stock => stock.type === "Finance"))
//     })
//   }else{
//     //all
//     this.setState({
//       filteredStocks: (this.stocksArray)
//     })
//   }   
// }