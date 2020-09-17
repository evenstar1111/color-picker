import React from 'react';
import './index.css';
import Navigation from './Components/navigation';
import LoginForm from './Components/login-dialog';
import ColPicker from './pages/color-pickers'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,     
    };
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
          handleOpenLoginDialog={() => this.handleOpenLoginDialog()} />
        <LoginForm
          ifOpen={this.state.isLoginOpen}
          handleClose={() => this.handleCloseLoginDialog()} />
        <div>
          <ColPicker />
        </div>
      </div>
    )
  }
}


export default App;