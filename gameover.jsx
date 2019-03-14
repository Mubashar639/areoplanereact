import React, { Component } from 'react';
import { Paper, Link } from '@material-ui/core';
import gameend from "./pic/game-over.png"
import { Redirect } from 'react-router-dom'



class Gameover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: JSON.parse(localStorage.getItem('myKey')),
            name: JSON.parse(localStorage.getItem('name')),
      redirect: false

        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/instuction' />
        }
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    render() {
        return (

            <div>
                <Paper className="gameover">
                    <div className="instruction">
                        <img src={gameend} />
                        <h2> {this.state.name} score : {this.state.score}</h2>
                        <ul>
                            <li> hit continue to play the game agian </li>

                        </ul>
                        {this.renderRedirect()}
                <button onClick={this.setRedirect}>continue</button>
                    </div>
                </Paper>

            </div>



        );
    }
}

export default Gameover;


