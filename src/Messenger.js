import React from 'react'
import {useState, useEffect, Component } from 'react';
import {Button, InputLabel, Input, FormControl, FormHelperText} from "@material-ui/core";
import './Messenger.css';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function  Messenger({ match }) {
   
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loginUser, setloginUser] = useState('');

  //console.log("What is match",match);

  //Load the data from DB
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot => {
     //setMessages(snapshot.docs.map(doc => ({username: doc.data().username,text: doc.data().message})));
     console.log("data: ",snapshot.docs.map(doc => doc.data()))
     setMessages(snapshot.docs.map(doc => doc.data()));
    })
  },[]);

  useEffect(() => {
    setloginUser(match.params.userId);
  },[]);

  const sendMessage = (event) => {
    event.preventDefault();
    //setMessages([...messages, {username: loginUser, text: input}]);
    db.collection('messages').add({
      username:loginUser,
      message:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="Messenger">
      <img src="data:image/jpeg;base64,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" 
        alt=""
        className="app__messangerIcon"
       />
      <h5>Welcome {loginUser}!</h5>
      <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter a message</InputLabel>
        <Input id="my-input" 
              aria-describedby="my-helper-text" 
              value={input} 
              onChange={event => setInput(event.target.value)} />
        <FormHelperText id="my-helper-text">An awesome messenger app!!</FormHelperText>
      </FormControl>
       
        {/* Input */}
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        {/* Button to send */}
        <Button variant="contained" 
          color="secondary" 
          type="submit" 
          disabled={!input}
          startIcon={<SendIcon />}
          onClick={sendMessage}>Send</Button>
      </form>
      <FlipMove>
      {/* Messages */}
      {
        messages.map(message => (
          // console.log(message)
          <Message username={loginUser} message={message}/>
        ))
      }       
      </FlipMove>
    </div>
  );
}

export default Messenger
