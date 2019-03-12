import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from './Components/Menu';
import Sidebar from "./Components/Sidebar";
import './App.css';
import productData from './productData';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalPrice: 0,
      receivedMoney:'0',
      returnMoney:0,
    }
  }
  updateReturnMoney = () => {
    const returnMoney = Number(this.state.receivedMoney)-Number(this.state.totalPrice);
    if (returnMoney > 0){
      this.setState({
        returnMoney: returnMoney,
      })
    }
  };
  handleNumberClick = (e) => {
    const num = e.target.textContent;
    this.setState({
      receivedMoney: this.state.receivedMoney !== '0' ? this.state.receivedMoney + num : ''+num
    },() => {
      this.updateReturnMoney()
    });

  };
  handleDeleteNum = () => {
    this.setState({
      receivedMoney:'0',
      returnMoney:0,
    });
  };
  render() {
    return (
      <Grid
        className={'app'}
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
      >
        <Menu className={'Products'} style={{flex:'1'}}>
        </Menu>
      <Sidebar
        style={{flex:'1'}}
        totalPrice={this.state.totalPrice}
        handleNumberClick={this.handleNumberClick}
        handleDeleteNum={this.handleDeleteNum}
        receivedMoney={this.state.receivedMoney}
        returnMoney={this.state.returnMoney}
      />
      </Grid>
    );
  }
}

export default App;
