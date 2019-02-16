import React, { Component } from 'react';
import { Socket } from 'dgram';
import ChatComponent from './ChatContainer';

class AdminChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderViewForAdmin= (user,adminGroups,socket)=>{
    let _view = adminGroups.map((_group,index)=>{
        return (<div key={index} className="col-6"><ChatComponent user={user} group={adminGroups[index]} adminGroups={adminGroups[index]} socket={socket}/></div>)
    })
    return (<div className="row">{_view}</div>)
  }

  render() {
      const {user,adminGroups,socket} = this.props;
      console.log('adin chat',this.props)
    return (
        //this.renderViewForAdmin(group,user,socket)
        <ChatComponent user={user} group={adminGroups[0]} socket={socket}/>
        
    );
  }
}

export default AdminChat;
