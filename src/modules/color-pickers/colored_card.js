import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

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
   const classes = useStyles();

   return (
      <Card className={classes.coloredCard}>
         <Box
            className={classes.box} 
            px='10px' 
            display='flex'
            justifyContent='center' 
            alignItems='center'
         >
            <Typography className={classes.headingType} variant='h2' component='p'>
               COLORED TEXT
            </Typography>
         </Box>
      </Card>
   )
}

export default ColorShower;