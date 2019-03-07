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
      currentOrder: [],
      totalPrice: 0,


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
  handleAddClick = (event) => {
    console.log(event.target.parentNode)
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
        >
        </Menu>
      <Sidebar style={{flex:'1'}}/>
      </Grid>
    );
  }
}

export default App;
