
const io = require('./index.js').io;

// const {VERIFY_USER, USER_CONNECTED, LOGOUT}=require('../Events');
// const {createUser, createMessage, createChat }= require('../Factories');



const connectedUser =[
    {
        name:'Ram',
        id:'1'
    },
    {
        name:'Sam',
        id:'2'
    },
    {
        name:'Jam',
        id:'3'
    },
    {
        name:'Tam',
        id:'4'
    },{
        name:'Admin',
        id:'5'
    }
]
const groupName = [
    {
        name:'group1',
        id:'G1',
        members:[connectedUser[0],connectedUser[1],connectedUser[4]]
    },
    {
        name:'group2',
        id:'G2',
        members:[connectedUser[2],connectedUser[3],connectedUser[4]]
    }
]
module.exports = function(socket){
    console.log("Socket ID is:"+ socket.id);

    // to verify user name
    socket.on('VERIFY_USER',(nickname, callback)=>{
        console.log('hello',nickname);
        
        if(isUser(connectedUser,nickname)){
            callback({isUser: true, user:getUser(nickname), group:getGroup(nickname)})
        }else{
            callback({isUser: false, user:null})
        }
    })

    // user connects with user name
   

    //
    socket.on('SEND_MESSAGE',(data)=>{
        console.log('got the message',data);
        io.emit('message-sent', data)
    })
    
}
// check the user already exit or not
function isUser(userList, username){
    let return_ = false;
    // userList.forEach(element => {
    //     if(element.name = username){
    //         return_= true;
    //     } 
    // });
    for(let i=0;i<userList.length;i++){
        if(userList[i].name == username){
            return_= true;
            //return return_
        }
    }
    return return_
}
// to get user
function getUser(username){
    let return_;
    // connectedUser.forEach(element => {
    //     if(element.name = username){
    //         return_ = element
    //     } 
    // });
    for(let i=0;i<connectedUser.length;i++){
        if(connectedUser[i].name == username){
            return_= connectedUser[i];
            //return return_
        }
    }
    return return_  
}
//
function getGroup(username){
    let _groupName;
    if(username == "Admin"){
        _groupName = groupName;
        
    }
    else{
        for(let i=0;i<groupName.length;i++){
            for(let _i=0;_i<groupName[i].members.length;_i++){
                if(groupName[i].members[_i].name == username){
                    _groupName = groupName[i]
                }
            }
        }
    }
    
    return _groupName
}