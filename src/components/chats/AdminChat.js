import React, { Component } from 'react';
import { Socket } from 'dgram';
import ChatComponent from './ChatContainer';

class AdminChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderViewForAdmin= (group,user,socket)=>{
    let _view = group.map((_group,index)=>{
        return (<ChatComponent key={index} user={user} group={group[index]} socket={socket}/>)
    })
    return _view
  }

  render() {
      const {user,group,socket} = this.props;
    return (
        //this.renderViewForAdmin(group,user,socket)
        <ChatComponent user={user} group={group[0]} socket={socket}/>
    );
  }
}

export default AdminChat;
