import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import PaymentKeys from './PaymentKeys';
const OrderList = styled(List)`
  height:33vh;
  overflow-y: scroll;
`;
export default class Sidebar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Grid item xs={4} className={'Sidebar'} >
        <Typography variant="h6" className={'sidebartitle'}>
          Order
        </Typography>
        <div className={'order-list'}>
          <OrderList>

          </OrderList>
        </div>
        <PaymentKeys
          totalPrice={this.props.totalPrice}
          handleNumberClick={this.props.handleNumberClick}
          handleDeleteNum={this.props.handleDeleteNum}
          receivedMoney={this.props.receivedMoney}
          returnMoney={this.props.returnMoney}
        />
      </Grid>
    )

  }
}
