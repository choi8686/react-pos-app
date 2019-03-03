import React from 'react';
import Grid from '@material-ui/core/Grid';
import productData from '../productData';
import Button from '@material-ui/core/Button';

export default class Categories extends React.Component{
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
        >
        {productData.map((category) =>(
          <Button variant="outlined" size="large" color="primary" className={'categoryBtn'}>
            {category.category}
          </Button>
          )
        )
        }
        </Grid>
    </Grid>)
  }
}
