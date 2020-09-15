import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ColorCodeContainer from './color_container';
import ColoredCard from './colored_card';




function ColPicker(props) {
   return (
      <Box p='1rem'>
         <Grid container>
            <Grid container item>
               <Grid item xs={12} md={8} >                  
                  <ColoredCard />
               </Grid>
               <Grid item xs={12} md={4} >
                  <Box mb='20px'>
                     <ColorCodeContainer />
                  </Box>                  
               </Grid>
            </Grid>
         </Grid>
      </Box>
   )
}
;

export default {
   routerProps: {
      path: '/',
      exact: true,
      component: ColPicker,
   },
   name: 'Color Picker',
}