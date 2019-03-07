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
      currentCategory : productData[0].category,
      currentMenuItems : productData[0].items,
      currentOrder: {},
      totalPrice: 0,
      receivedMoney:'0',
    }
  }
  handleCategoryClick = (event) => {
    const newCategory = event.target.textContent;
    const newMenuItems = productData.filter((category)=>{
      if (category.category === newCategory){
        return category;
      }
    });

    this.setState({
      currentCategory: newCategory,
      currentMenuItems: newMenuItems[0].items,
    });
  };
  handleAddClick = (itemName,itemPrice) => {
    const { currentOrder } = this.state;
    if (currentOrder[itemName]){
      currentOrder[itemName].quantity++;
      currentOrder[itemName].price = currentOrder[itemName].quantity * itemPrice;
    } else {
      currentOrder[itemName] = {};
      currentOrder[itemName].quantity = 1;
      currentOrder[itemName].price = itemPrice;
    }
    this.setState({
      currentOrder : currentOrder,
    });
    this.updateTotalPrice()
  };
  updateTotalPrice= ()=>{
    let totalPrice = 0;
    const { currentOrder } = this.state;
    for (let item in currentOrder){
      totalPrice += Number(currentOrder[item].price);
    }
    this.setState({
      totalPrice: totalPrice
    });
  };
  handleNumberClick = (e) => {
    const num = e.target.textContent;
    console.log({num})
    this.setState({
      receivedMoney: this.state.receivedMoney !== '0' ? this.state.receivedMoney + num : ''+num
    })
  };
  handleDeleteNum = () => {
    this.setState({
      receivedMoney:'0'
    })
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
        <Menu className={'Products'}
              style={{flex:'1'}}
              currentCategory={this.state.currentCategory}
              currentMenuItems={this.state.currentMenuItems}
              handleCategoryClick={this.handleCategoryClick}
              handleAddClick={this.handleAddClick}
              receivedMoney={this.state.receivedMoney}
        >
        </Menu>
      <Sidebar style={{flex:'1'}}
               currentOrder={this.state.currentOrder}
               totalPrice={this.state.totalPrice}
               handleNumberClick={this.handleNumberClick}
               handleDeleteNum={this.handleDeleteNum}
               receivedMoney={this.state.receivedMoney}
      />
      </Grid>
    );
  }
}

export default App;
