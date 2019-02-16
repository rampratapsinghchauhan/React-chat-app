import React, { Component } from 'react';
import ChatInput from './chatInput';
import './chat.css';
export default class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chats:[],
          activeChat:null,
          user:null
    };
  }
  componentWillMount() {
    const { socket } = this.props;
    socket.on('message-sent', (a)=>{this.addMessageToChat(a)})
	}

  addMessageToChat =(chat)=>{
    console.log('this is messgae',chat);
    let {chats}=this.state;
    const {group,user} = this.props;
    debugger;
    if(this.checkGroup(chat.user,group)){
        chats = [...chats,chat];
        console.log('chats are',chats);
        this.setState({chats});
    }
    
    
  }
  checkGroup(user,group){
    let _h;
    if(!group){
        group = this.props.adminGroups;
    }
    for(let i=0;i<group.members.length;i++){
        if(group.members[i].name == user.name){
            _h =true;
        }
    }
    return _h
  }
  sendMessage(user, message){
      const {socket}=this.props;
      const obj_ ={
        message:message,
        user:user
      }
      socket.emit("SEND_MESSAGE",obj_)
  }
  render() {
    const {user,socket}=this.props;
    const {chats}=this.state;
    //  
    return (
        <div className="Chat-container">
            <div className="Message-container">
                <div className="col-12"><h3>Messages</h3></div>
                {chats.map((chat_,index)=>{
                    return (<div className="col-12" key={index}>
                        <div className="alert alert-info no-margin" >{chat_.message}</div>
                        <div className="alert-light-1">-{chat_.user.name}</div>
                    </div>
                    );
                    })
                }
            </div>
            <div className="Message-input">
                <ChatInput
                    sendMessage={
                        (message)=>{
                            this.sendMessage(user, message)
                        }
                    }
                />
            </div>
            
        </div>
    );
  }
}
