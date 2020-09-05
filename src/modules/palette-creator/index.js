import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PaletteCard from './palette';
import ColorTool from './popupColorTool';


const PaletteCreator = () => {
   const [ anchorEl, setAnchorEl ] = useState(null);

   const open = Boolean(anchorEl);

   function handleClickOnOpen(event) {
      setAnchorEl(event.currentTarget);
   }

   function handleClickOnClose() {
      setAnchorEl(null);
   }

   return (
      <Box
         p='1rem'
      >
         <Grid container>
            <Grid item xs={12} md={9}>
               <PaletteCard handleClick={handleClickOnOpen} />
            </Grid>
            <ColorTool open={open} anchorEl={anchorEl} handleOnClose={handleClickOnClose} />
         </Grid>
      </Box>
   )
};

export default {
   routerProps: {
      path: '/palette-creator',
      component: PaletteCreator,
   },
   name: 'Palette Creator',
}