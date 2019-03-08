import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from './Components/Menu';
import Sidebar from "./Components/Sidebar";
import Receipt from './Components/Receipt';
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
      returnMoney:0,
      openReceipt:false,
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
      currentOrder[itemName].individualPrice = itemPrice;
    }
    this.setState({
      currentOrder : currentOrder,
    },()=>{
      this.updateTotalPrice();
      this.updateReturnMoney();
    });
  };
  updateTotalPrice= ()=>{
    let totalPrice = 0;
    const { currentOrder } = this.state;
    for (let item in currentOrder){
      totalPrice += Number(currentOrder[item].price);
    }
    this.setState({
      totalPrice: totalPrice
    },()=>{
      this.updateReturnMoney();
    });

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
  updateReturnMoney = () => {
    const returnMoney = Number(this.state.receivedMoney)-Number(this.state.totalPrice);
    if (returnMoney > 0){
      this.setState({
        returnMoney: returnMoney,
      })
    }
  };
  deleteOrderItem = (item) => {
    let { currentOrder } = this.state;
    if (item.quantity > 1){
      currentOrder[item.name].quantity--;
      currentOrder[item.name].price = currentOrder[item.name].quantity * currentOrder[item.name].individualPrice;
    } else {
      delete currentOrder[item.name];
    };
    this.setState({
      currentOrder: currentOrder,
    }, () => {
      this.updateTotalPrice();
      this.updateReturnMoney();
    })
  };
  openReceipt = () => {
    this.setState({
        openReceipt:true,
      })
  };
  closeReceipt = () => {
    this.setState({
      openReceipt:false,
    })
  };
  finishPayment = () => {
    this.setState({
      currentOrder: {},
      totalPrice: 0,
      receivedMoney:'0',
      returnMoney:0,
    },()=>this.closeReceipt())
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
               returnMoney={this.state.returnMoney}
               deleteOrderItem={this.deleteOrderItem}
               openReceipt={this.openReceipt}
      />
      <Receipt open={this.state.openReceipt}
               currentOrder={this.state.currentOrder}
               close={this.closeReceipt}
               totalPrice={this.state.totalPrice}
               finish={this.finishPayment}
      />
      </Grid>
    );
  }
}

export default App;
