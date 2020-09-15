import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Color from '../../context/context';

const useStyles = makeStyles(theme => ({
   coloredCard: {
      height: 250,
      marginBottom: 15,
      [theme.breakpoints.up('md')]: {
         marginRight: '15px',
         height: 400,
      },
   },
   headingType: {
      fontWeight: 700,
   },
   box: {
      height: '100%',
   }
}));


const ColorShower = props => {
   const { backColor, foreColor } = useContext(Color);

   const classes = useStyles();

   return (
      <Card style={{
         backgroundColor: `
         rgba(${backColor.r}, 
               ${backColor.g}, 
               ${backColor.b}, 
               ${backColor.a})`
         }} className={classes.coloredCard}
      >
         <Box
            className={classes.box} 
            px='10px' 
            display='flex'
            justifyContent='center' 
            alignItems='center'
         >
            <Typography style={{
               color: `
                  rgba(${foreColor.r}, 
                        ${foreColor.g}, 
                        ${foreColor.b}, 
                        ${foreColor.a})`,
               }} className={classes.headingType} variant='h2' component='p'
            >
               COLORED TEXT
            </Typography>
         </Box>
      </Card>
   )
}

export default ColorShower;