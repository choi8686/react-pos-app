import React from 'react';
import Grid from '@material-ui/core/Grid';
import productData from '../productData';
import Button from '@material-ui/core/Button';

export default class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Grid item xs={8} className={'Products'}>
      <h2>Categories</h2>
        <Grid
          container
          spacing={16}
          className={'Categories'}
          alignItems={'center'}
          direction={'row'}
          justify={'space-evenly'}
        >{
          // FILL ME IN
        }
        </Grid>
        <h3>Options</h3>
    </Grid>)
  }
}
