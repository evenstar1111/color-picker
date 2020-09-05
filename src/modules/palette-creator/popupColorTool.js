import React from 'react';
import Popover from '@material-ui/core/Popover';
import ChromePicker from 'react-color';

const ColorTool = props => {
   return (
      <Popover
         anchorEl={props.anchorEl}
         open={props.open}
         anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
         }}
         transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
         }}
         onClose={props.handleOnClose}
      >
         <ChromePicker />
      </Popover>
   )
}

export default ColorTool;