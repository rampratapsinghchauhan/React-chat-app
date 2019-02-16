import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chatType:''
    };
  }

  handleChange =(e)=>{
    this.setState({chatType:e.target.value})
  }
  sendMessage= ()=>{
      this.props.sendMessage(this.state.chatType);
      this.setState({chatType:""})
  }
  render() {
      const {chatType} = this.state;
    return (
        <div className="form-group">
            {/* <input className="form-control" value = { chatType } onChange={this.handleChange}></input>
            <button className="btn btn-block btn-info" onClick={this.sendMessage}> Send Message</button> */}
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Message"  value = { chatType } onChange={this.handleChange}/>
                <div className="input-group-btn">
                    <button className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
  }
}

export default ChatInput;
