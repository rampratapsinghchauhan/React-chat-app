import React, { Component } from 'react';
import Login from './login';

import io from 'socket.io-client';
import ChatComponent from './chats/ChatContainer';
import AdminChat from './chats/AdminChat';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state ={
      socket:null,
      user:null,
      gropu:null,
      admin:false
  }
  }

  componentWillMount(){
    this.initSocket();
  }
initSocket =()=>{
    const socket = io("http://192.168.1.6:3231");
    socket.on('connect',()=>{
        console.log('Connected');
        
        
    })
    this.setState({socket});
}

setUser = (user)=>{
    console.log('in layout',user);
    const {socket}= this.state;
    //socket.emit('USER_CONNECTED', user);
    this.setState({user});
}
setGroup = (group)=>{
    console.log('in layout group is',group);
    if(group.length > 0){
        this.setState({group});
        const admin =true;
        this.setState({admin});
    }else{
        this.setState({group});
    }
    
}
renderView(){
    const {socket}= this.state;
    const {user, group}= this.state;
    if(this.state.admin){
        return (<AdminChat user={user} group={group} socket={socket}/>)
    }else{
        return(<ChatComponent user={user} group={group} socket={socket}/>);
    }
}
  render() {
    const {title} = this.props;
    const {socket}= this.state;
    const {user, group}= this.state;
    return (
        <div className="container">
        {
            !user ?	<Login socket={socket}   setUser={this.setUser} setGroup={this.setGroup}></Login>:
            this.renderView()
        }
        </div>
    );
  }
}

export default Layout;
