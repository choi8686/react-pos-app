import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
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
          <List>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Product 1"
                />
              </ListItem>,
            )}
          </List>
        </div>
      </Grid>
    )

  }
}
