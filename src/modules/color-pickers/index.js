import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ColorCodeContainer from './color_container';
import ColorShower from './colored_card';
import { makeStyles } from '@material-ui/core';
import {
   HuePicker,
   AlphaPicker,
   TwitterPicker,
} from 'react-color';

const useStyles = makeStyles({
   containerBox: {
      backgroundColor: '#f5f5f5'
   }
});



const ColPicker = () => {
   const classes = useStyles();

   return (
      <Box className={classes.containerBox} p='1rem'>
         <Grid container>
            <Grid container item>
               <Grid item xs={12} md={8} >                  
                  <ColorShower />               
               </Grid>
               <Grid item xs={12} md={4} >
                  <div style={{marginBottom: '15px'}}>
                     <ColorCodeContainer />
                  </div>
                  <div style={{marginBottom: '15px'}}>
                     <HuePicker width='100%' />
                  </div>
                  <div style={{marginBottom: '15px'}}>
                     <AlphaPicker width='100%' />
                  </div>
                  <div style={{marginBottom: '15px'}}>
                     <TwitterPicker width='100%' triangle='hide' />
                  </div>
               </Grid>
            </Grid>
         </Grid>
      </Box>
   )
};

export default {
   routerProps: {
      path: '/',
      exact: true,
      component: ColPicker,
   },
   name: 'Color Picker',
}