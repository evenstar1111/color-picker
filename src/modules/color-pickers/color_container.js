import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Paper,
   Box,
   Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNotOutlined';
import TurnedInIcon from '@material-ui/icons/TurnedInOutlined';
import PopupColorTool from '../utils/popper';
import { SketchPicker } from 'react-color';
import { useContext } from 'react';
import Color from '../../context/context';
import { TwitterPicker } from 'react-color';


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
      marginLeft: 10,
      fontWeight: 700,
   },
   colorBox: {
      minWidth: 30,
      height: 30,
      backgroundColor: '#dedede',
      borderRadius: '4px',
      boxShadow: `0 1px 6px 1.5px rgba(0, 0, 0, 0.1),
                  0 3px 10px 3px rgba(0, 0, 0, 0.06),
                  0 6px 15px 4px rgba(0, 0, 0, 0.03)`,
   },
   favIcon: {
      width: 25,
      height: 25,      
   }
});

const TitleAndColorBoxContainer = (props) => {
   const classes = useStyles();

   return (
      <React.Fragment>
         <div 
            id={props.elId} 
            onClick={props.handleClick} 
            className={classes.colorBox} 
            style={{backgroundColor: `${props.colorCode}`}}
         ></div>
         <Typography 
            className={classes.titleType}
            variant='h4'
            component='p'
            color='textPrimary'
            children={props.title}
         />
      </React.Fragment>
   );
};


const CardSections = props => {
   const classes = useStyles();

   function handleClickOnColorSquare(event) {
      props.handleOpen(event);
   };
   
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
                  <TitleAndColorBoxContainer 
                     elId={props.elId}
                     handleClick={handleClickOnColorSquare}
                     colorCode={props.colorCode}
                     title={props.title} />
               </Box>
               <Box 
                  width='40%' 
                  p='5px' 
                  display='flex'
                  justifyContent='flex-end'
                  alignItems='center'
               >
                  <Box>
                     <IconButton onClick={props.saveColor}>
                        <TurnedInNotIcon />
                     </IconButton>
                  </Box>
               </Box>
            </Box>
            <Box width='100%' p='5px'>
               <input className={classes.colorCodeInput} value={`${props.colorCode}`} readOnly />
            </Box>
         </Box>
      </React.Fragment>
   );
};



const ColorCodeContainer = props => {
   const 
      {backColor,
      backColorHex,
      foreColor, 
      foreColorHex,
      updateBackColor, 
      updateForeColor} = useContext(Color);

   const [ colorsArray, setColors ] = useState(twitterColors);
      
   const [ openBack, setOpenBack ] = useState(false);
   const [ openFore, setOpenFore ] = useState(false);

   const anchorEl_B = document.getElementById('background');
   const anchorEl_F = document.getElementById('foreground');
   
   function openPickerBack() {
      setOpenBack(true);
   }

   function openPickerFore() {
      setOpenFore(true);
   }
   
   function handleOnClose() {
      if (openBack) {
         setOpenBack(false);
      }
      if (openFore) {
         setOpenFore(false);
      }
   }
  
   

   return (
      <div>
         <Paper>
            <div>
               <CardSections 
                  mb='2.5rem'
                  title='background'
                  elId='background'
                  colorCode={backColorHex}
                  handleOpen={openPickerBack} />
               <CardSections 
                  title='foreground'
                  elId='foreground'
                  colorCode={foreColorHex}
                  handleOpen={openPickerFore} />
            </div>
            <PopupColorTool
               open={openBack}
               anchorEl={anchorEl_B}
               handleOnClose={handleOnClose}
            >
               <SketchPicker
                  color={backColor}
                  onChange={updateBackColor} 
               />
            </PopupColorTool>
            <PopupColorTool
               open={openFore}
               anchorEl={anchorEl_F}
               handleOnClose={handleOnClose}
            >
               <SketchPicker
                  color={foreColor}
                  onChange={updateForeColor}
               />
            </PopupColorTool>
         </Paper>
         <Box mt='20px'>
         <TwitterPicker 
            width='100%' 
            color={backColor} 
            colors={twitterColors}
            triangle='hide'
            onChange={updateBackColor} />
      </Box>
      </div>
   )
}

const twitterColors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#66dcEF',];

export default ColorCodeContainer;

//two lines added
//one and two
//three and two