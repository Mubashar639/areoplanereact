import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email:""
    }

  }
  run=(e)=>{
    const {name,value}=e.target
      this.setState({  
      [name]:value,
    })
    console.log(this.state);
  }
  
namesave=()=>{
  console.log("this is name save");
  let name=this.state.name
  localStorage.setItem("name",JSON.stringify(this.state.name))
  
}
  render() {
    
    return (
      
      <div className="intial">
      <Paper className="splash">
     
           <form  method="POST">
           <Avatar className="icon" >
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="icon" component="h1" variant="h5">
          GAME FORM
        </Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Enter your good name</InputLabel>
            <Input onChange={this.run} ref="eplaler" name="name" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Player email</InputLabel>
            <Input onChange={this.run} name="email" type="text"  autoComplete="current-pname" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          ><button onClick={this.namesave}  >
          <Link color="inherit" variant="body1"  component={RouterLink} to="/instruntion">
          Click for play
        </Link></button>
        
          </Button>
        </form>
      </Paper>
      

      </div>


    );
  }
}

export default Home;


