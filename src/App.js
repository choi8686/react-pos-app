import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Categories from './Components/Categories';
import Sidebar from "./Components/Sidebar";
import './App.css';
class App extends Component {
  render() {
    return (
      <Grid
        className={'app'}
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
      >
        <Categories className={'Products'} style={{flex:'1'}}>
        </Categories>
      <Sidebar style={{flex:'1'}}/>
      </Grid>
    );
  }
}

export default App;
