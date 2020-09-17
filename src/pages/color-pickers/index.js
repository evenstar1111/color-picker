import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ColorCodeContainer from './color_container';
import ColoredCard from './colored_card';
import ColorContext, {colorData} from '../../context/context';




function ColPicker(props) {
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


   return (
      <Box p='1rem'>
         <Grid container>
            <Grid container item>
               <ColorContext.Provider value={{
                  backColor,
                  backColorHex,
                  foreColor,
                  foreColorHex,
                  updateBackColor,
                  updateForeColor
               }}>
                  <Grid item xs={12} md={8} >                  
                     <ColoredCard />
                  </Grid>
                  <Grid item xs={12} md={4} >
                     <Box mb='20px'>
                        <ColorCodeContainer />
                     </Box>                  
                  </Grid>
               </ColorContext.Provider>
            </Grid>
         </Grid>
      </Box>
   )
}
;

export default ColPicker;