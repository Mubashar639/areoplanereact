import React, { Component } from 'react';
import './App.css';
import gole from './pic/goli.png';

import { Paper } from '@material-ui/core';

var keycode = require('keycode');
document.addEventListener('keydown', function(e) {
  let gamestate =JSON.parse(localStorage.getItem("gamestatus"))
if(gamestate===true){
  if(keycode(e)==="f"){
    window.innerComponent.goliappend();
  }
}
})


class Goli extends Component {
    constructor(){
        super();
        window.innerComponent = this;
        this.state={
          score:0
        }
    }

 

goliappend=()=>{
    //console.log("You pressed", keycode(e));
    let goli=document.createElement("img");
    goli.src=gole;
    goli.setAttribute("class","goli");
    let container= document.querySelector(".golidiv")
  console.log(container)    
  container.appendChild(goli)
  let planemove=document.querySelector(".aeroplane").getBoundingClientRect();
  
     goli.getBoundingClientRect();
    goli.style.left=planemove.right+ "px";
    goli.style.top=planemove.top+50 +"px";
  // console.log(this.state.planeright)
  let allbird=[];
    var golimove= setInterval(() => {
    let golidirection= goli.getBoundingClientRect();

      let left= parseFloat(goli.style.left)
      if (left > 1200) {
        goli.remove();
        clearInterval(golimove);
      }else
    goli.style.left=(left+6)+"px";

     allbird= document.querySelectorAll(".bird");
       //console.log(allbird)
       allbird.forEach(element => {
         let birdmove=element.getBoundingClientRect()
          if(left>=birdmove.left && golidirection.top >= birdmove.top && golidirection.bottom <= birdmove.bottom){
            element.remove();
           // allbird.pop(allbird.indexOf(element));
          this.props.score()
            goli.remove();
            clearInterval(golimove);
          }
       });
    


   }, 70);
  }


  render() {
    return (
 
        <div class="golidiv">
        
         <Paper className="button2">
           <button onClick={this.goliappend}> fire</button>
         </Paper>
        </div>

    

    );
  }
}

export default Goli;


