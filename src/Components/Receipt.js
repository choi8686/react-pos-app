import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
export default class Receipt extends React.Component{
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
      <Dialog
        open={this.props.open}
        onClose={this.props.close}
      >
        <MuiDialogTitle>
          Confirm your order:
        </MuiDialogTitle>
        <MuiDialogContent>
          {orderList.map((item)=>(
            <ListItem divider>
              <ListItemText>
                {item.name}
              </ListItemText>
              <ListItemText>
                {item.quantity}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem>
            <ListItemText>
              총 금엑:
            </ListItemText>
            <ListItemText>
              {this.props.totalPrice+' 원'}
            </ListItemText>
          </ListItem>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={this.props.close}>
            <CloseIcon/>
          </Button>
          <Button variant={'outlined'}
                  color={"primary"}
                  onClick={this.props.finish}
          >
            Confirm and pay
          </Button>
        </MuiDialogActions>
      </Dialog>
    )
  }
}
