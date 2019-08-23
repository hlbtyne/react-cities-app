import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Table from './components/Table'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Route path='' component={props => <Table {...props}/>} />
      </div>
        
    )
  }
}

export default App;
