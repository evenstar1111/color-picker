import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';

const useStyles = makeStyles({
   colorSquare: {
      height: 100,
      border: '1px solid #eee'
   },
})

const ColorSquare = props => {
   const classes = useStyles();

   return (
      <div onClick={props.handleClick} className={classes.colorSquare}></div>
   )
}


const PaletteCard = props => {
   const Squares = Array(5).fill(null).map((member, index) => {
      return (
         <ColorSquare handleClick={props.handleClick} key={`square${index}`} />
      );
   })


   return (
      <Box>               
         <Card>
            <CardHeader
               title='Color Palette'
               action={
                  <IconButton>
                     <TurnedInNotIcon />
                  </IconButton>
               } />
            <Box p='16px' pt='0'>
               {Squares}
            </Box>
         </Card>      
      </Box>
   )
};


export default PaletteCard;