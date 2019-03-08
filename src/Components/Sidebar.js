import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
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
    const orderList = [];
    const { currentOrder } = this.props;
    if (Object.keys(currentOrder).length){
      for (let item in currentOrder){
        orderList.push({
          name:item,
          price:currentOrder[item].price,
          quantity:currentOrder[item].quantity,
        })
      };
    }
    return(
      <Grid item xs={4} className={'Sidebar'} >
        <Typography variant="h6" className={'sidebartitle'}>
          Order
        </Typography>
        <div className={'order-list'}>
          <OrderList>
            {orderList.map((item)=>(
              <ListItem divider>
                <IconButton
                  size="small"
                  onClick={(e)=>this.props.deleteOrderItem(item)}
                >
                <DeleteIcon
                  color={'action'}

                />
                </IconButton>
                <ListItemText>
                {item.name}
              </ListItemText>
                <ListItemText>
                  {item.quantity}
                </ListItemText>
                <ListItemText>
                  {item.price}
                </ListItemText>
              </ListItem>
            ))}
          </OrderList>
        </div>
        <PaymentKeys
          totalPrice={this.props.totalPrice}
          handleNumberClick={this.props.handleNumberClick}
          handleDeleteNum={this.props.handleDeleteNum}
          receivedMoney={this.props.receivedMoney}
          returnMoney={this.props.returnMoney}
          openReceipt={this.props.openReceipt}
        />
      </Grid>
    )

  }
}
