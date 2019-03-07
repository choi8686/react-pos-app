import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import productData from '../productData';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const MenuCard = styled(Card)`
  max-width:250px;
  max-height:250px;
  width:250px;
  margin:10px;
  padding:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
`;
const MenuImage = styled.img`
  max-height: 80px;
    width:auto;
`;
const FabButton = styled(Fab)`
  font-size:
`;
export default class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Grid item xs={8}
            container
            justify="space-between"
            alignItems="center"
            className={'Products'}
            direction={'column'}
            >
        <Grid
          container
          spacing={16}
          className={'Categories'}
          alignItems={'center'}
          direction={'row'}
          justify={'space-evenly'}
        >
        {productData.map((category) =>(
          <Button variant={'contained'}
                  size="large"
                  color={this.props.currentCategory === category.category ? 'secondary': 'default'}
                  className={'categoryBtn'}
                  id={category.category}
                  onClick={this.props.handleCategoryClick}
          >
            {category.category}
          </Button>
          )
        )
        }
        </Grid>
        <Grid
          container
          spacing={16}
          className={'Options'}
          alignItems={'center'}
          direction={'row'}
          justify={'space-evenly'}
        >
          {this.props.currentMenuItems.map((item)=>(
            <MenuCard item={item.name} price={item.price}>
              <MenuImage src={item.img}/>
              <p>{item.name}</p>
              <p>{item.price}원</p>
              <Fab color="secondary"
                   aria-label="Add"
                   variant={'extended'}
                   size={'small'}
                   onClick={(e)=> this.props.handleAddClick(item.name,item.price)}
              >
                <AddIcon />
                추가
              </Fab>
            </MenuCard>
          ))}
        </Grid>
    </Grid>)
  }
}
