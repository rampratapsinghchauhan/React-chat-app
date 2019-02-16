import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nickname:null,
        socket:null
    };
  }
  componentWillMount() {
    const { socket } = this.props;
	}

  
  handleChange =(e)=>{
    this.setState({nickname:e.target.value})
  }
  handleLogin =(e)=>{
    const {socket}=this.props;
    const {nickname}=this.state;
    socket.emit('VERIFY_USER', nickname, this.setUser)
  }
  setUser=({isUser,user, group})=>{
    if(isUser){
        //this.setError("User name is already taken")
        this.props.setUser(user)
        this.props.setGroup(group)
    }else{
        
        //this.setError("")
    }
}
  render() {
    
    return (
      
      <div className="form-group">
        <label>Login ID</label>
        <input className="form-control" onChange={this.handleChange}></input>
        <button className="btn btn-block btn-success" onClick={this.handleLogin}> Login</button>
        <div>
          User login id for group 1 : Ram or Sam for group 1 <br></br>
          User login id for group 2: Jam or Tam for group 2 <br></br>
          Admin user: Admin
        </div>
      </div>
    );
  }
}

export default Login;
