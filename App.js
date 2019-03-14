import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, } from "react-router-dom";
import Home from './home';
import Play from './work1';
import Instuction from './instruction';
import Gameover from './gameover';


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/play' component={Play} />
            <Route exact path='/instruntion' component={Instuction}/>
            <Route exact path='/gameover' component={Gameover}/>
            
            <Route path='/' component={Home} />


          </Switch>

        </div>

      </BrowserRouter>

    );
  }
}

export default App;


