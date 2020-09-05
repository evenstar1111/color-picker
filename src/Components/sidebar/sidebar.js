import React, { useState } from 'react';
import clsx from 'clsx';
import modules from '../../modules';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link as R_LINK,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
   activeLink: {
      backgroundColor: 'grey'
   },
});

export default function TemporaryDrawer(props) {
   const classes = useStyles();

   const [ currentTab, setCurrentTab ] = useState('Color Picker');

   const toggleDrawer = props.toggleDrawer;

   const list = (anchor) => (      
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
         })}
         role='presentation'
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}>
            <List>
               {
                  modules.map(module => (
                     <R_LINK 
                        to={module.routerProps.path}
                        className={module.name == currentTab ? classes.activeLink : null}
                        onClick={() => setCurrentTab(module.name)}
                        key={module.name}>
                           <ListItem>
                              <ListItemText>
                                 {module.name}
                              </ListItemText>
                           </ListItem>
                     </R_LINK>
                  ))
               }
            </List>
      </div>
   );

   return (
      <Router>
         <div>
            <Drawer
                  anchor={props.anchor}
                  open={props.ifOpen}
                  onClose={toggleDrawer(false)}>
                     {list(props.anchor)}
            </Drawer>
         </div>
         <div>
            <Switch>
               {modules.map(module => (
                  <Route {...module.routerProps} key={module.name} />
               ))}
            </Switch>
         </div>
      </Router>
   );
}