import React, { Component } from 'react';
import imag1 from './pic/bird3.gif';
import imag2 from './pic/bird4.gif';
import Goli from './goli';
import { Redirect } from 'react-router-dom'

var sectionStyle = {
  width: "30%",
  marginTop: "10px",
  marginLeft: "10px",

};
class work2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      chances: 3,
      planetop: this.props.calculate.top,
      planeright:this.props.calculate.right,
      redirect: false,
      gamestart:true,
      gamei:[],
    }
  }
    componentDidMount() {
    let gamesintervals = []
   
    let chance = 3
    var array = [imag1, imag2]
    let game = setInterval(() => {
      if(this.state.gamestart===true){
        this.state.gamei=game

      console.log("this is running fast");
      var image = document.createElement("img")
      image.src = array[Math.floor(Math.random() * 2)]
      image.setAttribute('class', 'bird');
      image.style.left = (this.refs.containter.offsetWidth - 200) + "px";
      image.style.top = (Math.random() * (document.getElementById("contain").offsetHeight-120)-20) + 'px';


      this.refs.containter.appendChild(image);
    
      let move = setInterval(() => {
       // console.log(image.style.left);
        let imagecal = image.getBoundingClientRect();

        let left = parseFloat(image.style.left) - 5;
        if (left < 0) {
          
          image.remove();
          clearInterval(move);
          
        }
        if (left <= this.props.calculate.right - 10 && (this.props.calculate.top+20 <= (imagecal.bottom) && this.props.calculate.bottom >= (imagecal.top + 20))) {
          image.remove();
          clearInterval(move);
          chance--
          this.setState({
            chances: chance
          })

          if (this.state.chances === 0) {
            clearInterval(game);
            localStorage
           //var allbird=document.querySelectorAll(".bird");
            this.setState({
              chance:0,
              gamestart:false,
              redirect: true
            })
         localStorage.setItem("gamestatus",JSON.stringify(this.state.gamestart))

            
            gamesintervals.map((item)=>{
              clearInterval(item)
            })
            clearInterval(move);
            image.remove();
            
          }

        }
        //  console.log(left)
        // if ((newTop + baloon.offsetHeight) < 0){
        //     this.chances -= 1;
        //     chancesBox.innerText = this.chances;
        //     baloon.remove();
        //     clearInterval(movingInterval);
        // }

        // if(this.chances == 0){
        //     this.gameOver();
        // }


        image.style.left = `${left}px`;
        
      }, 70)
    
      gamesintervals.push(move)
    }else{
      clearInterval(game)
    }
    }, 1000);
   
    
  

  }
 
scorecount =()=>{
let score=this.state.score;
score+=10;
this.setState({
  score,
})
}

renderRedirect = () => {
  if (this.state.redirect) {
    localStorage.setItem('myKey', JSON.stringify(this.state.score));
    return <Redirect to='/gameover' />
  }
}
  
componentWillUnmount(){
  console.log("unmount works");
  clearInterval(this.state.gamei)

  this.setState({
    gamestart:false
  })
  localStorage.setItem("gamestatus",JSON.stringify(false))
} 

  render() {
    

    
    return (
      <div  onKeyPress id="contain" className="contain" ref="containter" >
        {this.renderRedirect()}
        <div className="scoreCard">
        <h1>
 
          Score : {this.state.score}
        </h1>
        <h1>
          remainning chances :  {this.state.chances}
        </h1>

        </div>
          <Goli score={this.scorecount} />
      </div>


    );
  }
}

export default work2;


