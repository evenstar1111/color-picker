import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PaletteCard from './palette';
import ChromePicker from 'react-color';
import PopperColorTool from '../utils/popper';


const PaletteCreator = () => {
   const [ anchorEl, setAnchorEl ] = useState(null);
   const [ color, setColor ] = useState({ r: 51, g: 51, b: 51, a: 1});

   const open = Boolean(anchorEl);

   function handleColorChange(color) {
      setColor(color.rgb);
   }

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
               <PaletteCard color={color} handleClick={handleClickOnOpen} />
            </Grid>
            <PopperColorTool 
               open={open} 
               anchorEl={anchorEl} 
               handleOnClose={handleClickOnClose}
            >
               <ChromePicker
                  color={color}
                  onChange={handleColorChange} />
            </PopperColorTool>
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