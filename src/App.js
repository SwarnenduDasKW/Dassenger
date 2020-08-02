import React, {useState, useEffect} from 'react';
import {Button, InputLabel, Input, FormControl, FormHelperText} from "@material-ui/core";
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loginUser, setloginUser] = useState('');

  //Load the data from DB
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot => {
     //setMessages(snapshot.docs.map(doc => ({username: doc.data().username,text: doc.data().message})));
     //console.log("data: ",snapshot.docs.map(doc => doc.data()))
     setMessages(snapshot.docs.map(doc => doc.data()));
    })
  },[]);

  useEffect(() => {
    setloginUser(prompt("Please enter your login name: ?"));
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
    <div className="App">
      <img src="C:\CodeJam\React-Messenger\das-messenger\images\messenger_new.png" alt="" />
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
        <Button variant="outlined" 
          color="primary" 
          type="submit" 
          disabled={!input}
          onClick={sendMessage}>Send Message</Button>
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

export default App;
