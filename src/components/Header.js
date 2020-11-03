import React, { Component } from 'react';

class Header extends Component {
  constructor(hello){
    super()
    this.state = {
      hello: "jim",
      test: "test"
    }
  }

  test=()=>{
    this.setState({

    })
  }
  

  render() {
    console.log(this.state.hello)
    console.log(this.props.hello)
    console.log(this.state.test)
    return (
      <header>
        <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48394057%2F258081453087%2F2%2Foriginal.png?w=225&auto=format%2Ccompress&q=75&sharp=10&s=1d4ef9cb6418dc61ebdbb3ab0b587963"/>
        <h1 className="text-center">Flatiron Stock Exchange</h1>
      </header>
    );
  }

}

export default Header;
