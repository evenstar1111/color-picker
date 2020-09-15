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
import ColorContext, { colorData } from '../../context/context';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
});

export default function TemporaryDrawer(props) {
   const [ backColor, setBackColor ] = useState(colorData.background.rgb);
   const [ foreColor, setForeColor ] = useState(colorData.foreground.rgb);
   const [ backColorHex, setBackColorHex ] = useState(colorData.background.hex);
   const [ foreColorHex, setForeColorHex ] = useState(colorData.foreground.hex);

   const updateBackColor = (color) => {
      setBackColor(color.rgb);
      setBackColorHex(color.hex);
   };

   const updateForeColor = (color) => {
      setForeColor(color.rgb);
      setForeColorHex(color.hex);
   };


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
                     <ListItem key={module.name}>
                        <ListItemText>
                           <R_LINK 
                              to={module.routerProps.path}
                              className={module.name == currentTab ? 'active' : null}
                              onClick={() => setCurrentTab(module.name)}
                           >
                                 {module.name}
                           </R_LINK>
                        </ListItemText>
                     </ListItem>
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
               onClose={toggleDrawer(false)}
            >
               {list(props.anchor)}
            </Drawer>
         </div>
         <div>
            <Switch>
               <ColorContext.Provider value={{backColor, backColorHex, foreColor, foreColorHex, updateBackColor, updateForeColor}}>
                  {modules.map(module => (
                     <Route {...module.routerProps} key={module.name} />
                  ))}
               </ColorContext.Provider>
            </Switch>
            {/* <Switch>
               <Route exact={true} path={modules[0].routerProps.path} key={modules[0].name}>
                  <modules[0].routerProps.component />
               </Route>
               <Route></Route>
            </Switch> */}
         </div>
      </Router>
   );
}