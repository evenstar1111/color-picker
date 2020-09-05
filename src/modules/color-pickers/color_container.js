import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Paper,
   Box,
   Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles({
   boxColorCode: {
      padding: '.85rem',
      boxSizing: 'border-box',
   },
   colorCodeInput: {
      width: 80,
      padding: '6px 8px',
      border: '1.2px solid #dfdfdf',
      borderRadius: 5,
   },
   titleType: {
      marginRight: 10,
      fontWeight: 700,
   },
   colorBox: {
      width: 30,
      height: 30,
      backgroundColor: '#dedede'
   },
   favIcon: {
      width: 25,
      height: 25,      
   }
});

const CardSections = props => {
   const classes = useStyles();
   
   return (
      <React.Fragment>
         <Box
            className={classes.boxColorCode}
            style={{marginBottom: `${props.mb}`}}
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
         >
            <Box 
               display='flex' 
               flexWrap='nowrap'
               width='100%'
            >
               <Box 
                  width='60%' 
                  p='5px'
                  display='flex'
                  alignItems='center'
               >
                  <Typography className={classes.titleType} variant='h4' component='p' color='textPrimary'>
                     {props.title}
                  </Typography>
                  <Box>
                     <div className={classes.colorBox} style={{backgroundColor: `#${props.colorCode}`}}></div>
                  </Box>
               </Box>
               <Box 
                  width='40%' 
                  p='5px' 
                  display='flex'
                  justifyContent='flex-end'
                  alignItems='center'
               >
                  <Box display='none'>
                     <FavoriteIcon className={classes.favIcon} />
                  </Box>
               </Box>
            </Box>
            <Box width='100%' p='5px'>
               <input className={classes.colorCodeInput} value={`#${props.colorCode}`} readOnly />
            </Box>
         </Box>
      </React.Fragment>
   )
}


const ColorCodeContainer = () => {
 
   return (
      <Paper>
         <CardSections 
            mb='2.5rem'
            title='background'
            colorCode='dfdfdf' />
         <CardSections 
            title='foreground'
            colorCode='00aa88' />
      </Paper>
   )
}

export default ColorCodeContainer;