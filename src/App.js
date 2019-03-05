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
    }
  }
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
      <Sidebar style={{flex:'1'}}/>
      </Grid>
    );
  }
}

export default App;
