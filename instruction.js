import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

import { Paper } from '@material-ui/core';


class Instuction extends Component {
    constructor(prope){
        super(prope)
        this.state={
            gamestart : false,
        }
    }

    save=()=>{
       
          this.state.gamestart=true;
        
       
            localStorage.setItem("gamestatus",JSON.stringify(this.state.gamestart))

     
        console.log(this.state.gamestart)
    }

    render() {
        return (

            <div>
                <Paper className="instruction">
                    <div className="instruction">
                    <h2>instuction of game</h2>
                        <ul>
                            <li>This game is also fully can be fully control by key board</li>
                            <li>Press arrow keys to control earoplane</li>
                            <li>Press <b>f </b> for fire on birds</li>
                            <li> This game is aslo control by screen Button</li>
                            <li> hit continue to play the game </li>

                        </ul>
                        <button > <Link onClick={this.save}   to="/play"> Continue </Link></button>
                    </div>
                </Paper>
            </div>

        );
    }
}

export default Instuction;


