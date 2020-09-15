import React from 'react';
import './index.css';
import Navigation from './Components/navigation';
import LoginForm from './Components/login-dialog';
import SideBar from './Components/sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      isLoginOpen: false,     
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(open) {
    return (
      (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return
        }

        this.setState({left: open});
      }
    )
  }

  handleCloseLoginDialog() {
    this.setState({isLoginOpen: false})
  }

  handleOpenLoginDialog() {
    this.setState({isLoginOpen: true})
  }

  render() {
    return (
      <div className="app">
        <Navigation
          toggleDrawer={this.toggleDrawer}
          handleOpenLoginDialog={() => this.handleOpenLoginDialog()} />
        <SideBar
          anchor='left'
          ifOpen={this.state.left}
          toggleDrawer={this.toggleDrawer} />
        <LoginForm
          ifOpen={this.state.isLoginOpen}
          handleClose={() => this.handleCloseLoginDialog()} />      
      </div>
    )
  }
}


export default App;