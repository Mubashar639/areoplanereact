import React, { Component } from 'react';
import plane from "./pic/plane.png";
import ArrowKeysReact from 'arrow-keys-react';
import Work2 from './work2';
import { Paper } from '@material-ui/core';

var keycode = require('keycode');
document.addEventListener('keydown', function(e) {
  let gamestate =JSON.parse(localStorage.getItem("gamestatus"))
  console.log(keycode(e))
   // window.innerComponent.goliappend();
   if(gamestate===true){
  if(keycode(e)==="left"){
    window.outeraccess.left()
  }else
  if(keycode(e)==="down"){
    window.outeraccess.bottom()
  }else
  if(keycode(e)==="right"){
    window.outeraccess.right()
  }else
  if(keycode(e)==="up"){
    window.outeraccess.top()
  }
}
})

var sectionStyle = {
  position: "absolute",
  width: "20%",
  marginTop: "10px",
  marginLeft: "10px",
};

class Play extends Component {
  constructor(props){
    super(props);
  window.outeraccess=this;

    this.state = {
      top:"",
      right:"",
      bottom:"",
    };
  //   ArrowKeysReact.config({
  //     left: () => {
  //       var element = this.refs.image1;
  //      let allboundry=element.getBoundingClientRect()
  //       if(allboundry.left>0){
  //     element.style.marginLeft= (parseFloat(element.style.marginLeft) -4 )+"px";
  //     console.log(element.getBoundingClientRect());
  //       this.setState({
  //         top:element.getBoundingClientRect().top,
  //     right:element.getBoundingClientRect().right,
  //     bottom:element.getBoundingClientRect().bottom
  //       });
  //     }
  //     },
  //     right: () => {
  //       var element = this.refs.image1;
  //       let allboundry=element.getBoundingClientRect()
  //       if(allboundry.right<1000){
  //          element.style.marginLeft= (parseFloat(element.style.marginLeft) +4 )+"px"
  //       this.setState({
  //         top:element.getBoundingClientRect().top,
  //         right:element.getBoundingClientRect().right,
  //         bottom:element.getBoundingClientRect().bottom
  //       });
  //     }},
  //     up: () => {
  //       var element = this.refs.image1;
  //      let allboundry=element.getBoundingClientRect()
  //       if(allboundry.top>0){
  //     element.style.marginTop= (parseFloat(element.style.marginTop) -4 )+"px"
  //       this.setState({
  //         top:element.getBoundingClientRect().top,
  //         right:element.getBoundingClientRect().right,
  //         bottom:element.getBoundingClientRect().bottom
  //       });
  //     }},
  //     down: () => {
  //      var element = this.refs.image1;
  //      let allboundry=element.getBoundingClientRect()
  //       if(allboundry.bottom<700){
  //    element.style.marginTop= (parseFloat(element.style.marginTop) +4 )+"px"
  
     
  //       this.setState({
  //         top:element.getBoundingClientRect().top,
  //     right:element.getBoundingClientRect().right,
  //     bottom:element.getBoundingClientRect().bottom
  //       });
  //     }}
  //   });
  }

  right=()=>{
    var element = this.refs.image1;
    let allboundry=element.getBoundingClientRect()
    if(allboundry.right<400){
       element.style.marginLeft= (parseFloat(element.style.marginLeft) +6)+"px"
    this.setState({
      top:element.getBoundingClientRect().top,
      right:element.getBoundingClientRect().right,
      bottom:element.getBoundingClientRect().bottom
    });
  }

  }
 left=()=>{
  var element = this.refs.image1;
  let allboundry=element.getBoundingClientRect()
   if(allboundry.left>0){
 element.style.marginLeft= (parseFloat(element.style.marginLeft) -6 )+"px";
 console.log(element.getBoundingClientRect());
   this.setState({
     top:element.getBoundingClientRect().top,
 right:element.getBoundingClientRect().right,
 bottom:element.getBoundingClientRect().bottom
   });
 }
  }
   top=()=>{
    var element = this.refs.image1;
    let allboundry=element.getBoundingClientRect()
     if(allboundry.top>0){
   element.style.marginTop= (parseFloat(element.style.marginTop) -6 )+"px"
     this.setState({
       top:element.getBoundingClientRect().top,
       right:element.getBoundingClientRect().right,
       bottom:element.getBoundingClientRect().bottom
     });
   }
    
  }
  bottom=()=>{
    var element = this.refs.image1;
    let allboundry=element.getBoundingClientRect()
     if(allboundry.bottom< 550){
       console.log("this is plave bottem  "+ allboundry.bottom)
  element.style.marginTop= (parseFloat(element.style.marginTop) +6)+"px"

  
     this.setState({
       top:element.getBoundingClientRect().top,
   right:element.getBoundingClientRect().right,
   bottom:element.getBoundingClientRect().bottom
     });
   }
    
  }

  render() {
    console.log(this.state)
    return (
      <div  autoFocus  >
        <img  class="aeroplane" ref="image1" autoFocus {...ArrowKeysReact.events} tabIndex="1" src={plane} style={sectionStyle} alt="" srcset=""/>
       <Work2  calculate={this.state} />
        <Paper class="button">
          <div>
            
             <button onClick={this.top}> up </button>
            </div>
          <button onClick={this.left}> left </button>
          <button onClick={this.bottom}> down </button>
          <button onClick={this.right}> right </button>
        </Paper>
      </div>
    );
  }
}

export default Play;


