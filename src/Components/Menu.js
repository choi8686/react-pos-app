import React, { createElement } from 'react';
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
        >
       
        
        {
          productData.map(function(object, i){
            return <Button variant="contained" color="secondary" value={i} onClick={()=>this.props.handleCategoryClick}>
        {object.category}
      </Button>
      
            
          })
        }

        </Grid>
        {
          this.props.currentCategory.items.map(function(object){
            return <h1>{object.name}</h1>
          })
        }
        
        
    </Grid>)
  }
}
