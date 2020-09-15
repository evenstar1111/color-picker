import React from 'react';
import Popper from '@material-ui/core/Popover';


const PopperColorTool = props => {
   return (
      <Popper
         placement='left'
         disablePortal={true}
         modifiers={{
            flip: {
               enabled: true
            },
            preventOverflow: {
               enabled: true,
               boundariesElement: 'viewport'
            },
         }}
         open={props.open}
         anchorEl={props.anchorEl}
         onClose={props.handleOnClose}
      >
         {props.children}
      </Popper>
   )
}

export default PopperColorTool;