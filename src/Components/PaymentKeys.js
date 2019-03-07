import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ControlPanel = styled.div`
  display:flex;
  flex-direction:column;
  margin:0;
  min-width:33vw;
  height:30%;
  bottom:0;
  right:0;
  position:absolute;
  width: fit-content;
  border:1px solid gray;
  
`;
const Payment = styled.div`
  margin-bottom:0;
  bottom:0;
  display:flex;
`;
const PaymentList = styled(List)`
  width:100%;
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:stretch;
  justify-content:space-between;
`;
const Row = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:space-evenly;
  margin:0;
  width:100%;
  margin:0;
  align-items:stretch;
`;
const RowButton = styled(Button)`
  flex:1;
  margin:10px 10px;
`;
export default class PaymentKeys extends React.Component {
  render(){
    return(
      <div>
      <Payment className="payment">
        <PaymentList>
          <ListItem>
            <ListItemText
              primary="총 금액"
            />
            <ListItemText
              primary={this.props.totalPrice+' 원'} // Change this!
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="받은 돈"
            />
            <ListItemText
              primary={`${this.props.receivedMoney} 원`} // Change this!
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="거스름 돈"
            />
            <ListItemText
              primary="" // Change this!
            />
          </ListItem>
        </PaymentList>
      </Payment>
      <ControlPanel>
        <Row>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            7
          </RowButton>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            8
          </RowButton>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            9
          </RowButton>
        </Row>
        <Row>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            4
          </RowButton>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            5
          </RowButton>
          <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
            6
          </RowButton>
        </Row>
        <Row>
        <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
          1
        </RowButton>
        <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
          2
        </RowButton>
        <RowButton variant='contained' onClick={this.props.handleNumberClick} color="secondary" className={'number'}>
          3
        </RowButton>
      </Row>
        <Row>
          <RowButton variant='contained' color="secondary" className={'number'}>
            0
          </RowButton>
          <RowButton variant='contained' onClick={this.props.handleDeleteNum} color="default" id={'deleteNumber'}>
            삭제
          </RowButton>
          <RowButton variant='contained' color="primary" className={'payButton'}>
            결제
          </RowButton>
        </Row>
      </ControlPanel>
      </div>
    )
  }
}
