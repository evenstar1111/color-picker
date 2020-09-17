import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
   dialogWidth: {
      maxWidth: 400,
   },
   bottomMargin: {
      marginBottom: 15,
   }
})

export default function LoginForm(props) {
   const classes = useStyles();

   const { handleClose } = props;

   return (
      <div>
         <Button>

         </Button>
         <Dialog
            open={props.ifOpen}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
         >
            <DialogTitle 
               id='form-dialog-title'
               className={classes.dialogWidth}               
            >
               Login
            </DialogTitle>
            <DialogContent className={classes.dialogWidth}> 
               <form>              
                  <TextField
                     autoFocus
                     className={classes.bottomMargin}
                     variant='outlined'
                     margin='dense'
                     id='name'
                     label='email address'
                     type='email'
                     fullWidth />
                  <TextField                  
                     variant='outlined'
                     className={classes.bottomMargin}
                     margin='dense'
                     id='password'
                     label='password'
                     type='password'
                     fullWidth
                     autoComplete='true' />
               </form>
               <DialogActions className={classes.bottomMargin}>
                  <Button onClick={handleClose} variant='contained' color='secondary'>cancel</Button>
                  <Button onClick={handleClose} variant='contained' color='primary'>login</Button>
               </DialogActions>
               <Divider className={classes.bottomMargin} />
               <Typography
                  className={classes.bottomMargin}
                  variant='body1'
               >
                  Need an account ? &nbsp; 
                  <Link href='#' onClick={handleClose}>
                    click here
                  </Link>
               </Typography>
            </DialogContent>
         </Dialog>
      </div>
   )
}