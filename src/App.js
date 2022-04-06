import React, {useState, useEffect} from 'react';
import logo from './images/logo.png';
import './App.css';
import FlipMove from 'react-flip-move';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';

import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [input, setInput] = useState('');
  // const [messege, setMessege] = useState([
  //   {"name":"John","message":"Hello","timestamp":"12:00"},
  //   {"name":"Doe","message":"hi!","timestamp":"12:05"},
  //   {"name":"John","message":"How are you?","timestamp":"12:10"},
  //   {"name":"Doe","message":"I am fine","timestamp":"12:15"}
  // ]);
  const [messege, setMessege] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessege(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if(input !== ''){
      //setMessege([...messege, {"name":username,"message":input,"timestamp":Math.round(new Date().getTime()/1000)}]);
      db.collection("messages").add({
        username: username,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setInput('');
    }
  }

  return (
    <div className="App">
      <div className="app__header">
        <img src={logo} alt="logo" />
        <span><h2>Facebook Messenger Clone</h2>Using Firebase Realtime Database</span>
      </div>

      <form className='app__messageForm'>
        {/* <input value={input} onChange={event => setInput(event.target.value)} className='app__message' type="text" placeholder="Enter your messege here" />
        <button disabled={!input} className='app__sendMessege' type="submit" onClick={sendMessage}>Send</button> */}
        <FormControl className='app__formControl'>
          <InputLabel htmlFor="my-input">Enter your messege here</InputLabel>
          <Input className='app__message' value={input} onChange={event => setInput(event.target.value)} aria-describedby="Enter your messege here" />
          {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button> */}
          <IconButton className='app__sendMessege' aria-label="Send Message" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <div className="app__messages">
        <FlipMove>
          {
            messege.map(({id, message}) => {
              return <Message key={id} username={username} message={message} />
            })
          }
        </FlipMove>
      </div>

      
      
    </div>
  );
}

export default App;
