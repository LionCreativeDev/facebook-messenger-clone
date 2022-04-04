import React, {useState, useEffect} from 'react';
import logo from './images/logo.png';
import './App.css';
import { Button, Input, FormControl } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messege, setMessege] = useState([
    {"name":"John","message":"Hello","timestamp":"12:00"},
    {"name":"Doe","message":"hi!","timestamp":"12:05"},
    {"name":"John","message":"How are you?","timestamp":"12:10"},
    {"name":"Doe","message":"I am fine","timestamp":"12:15"}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if(input !== ''){
      setMessege([...messege, {"name":username,"message":input,"timestamp":Math.round(new Date().getTime()/1000)}]);
      setInput('');
    }
  }

  return (
    <div className="App">
      <div className="app__header">
        <img src={logo} alt="logo" />
        <span><h2>Facebook Messenger Clone</h2>Using Firebase Realtime Database</span>
      </div>

      <div className="app__messages">
        {
          messege.map(message => {
            return <Message message={message} />
          })
        }
      </div>

      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} className='app__message' type="text" placeholder="Enter your messege here" />
        <button disabled={!input} className='app__sendMessege' type="submit" onClick={sendMessage}>Send</button> */}
        <FormControl>
          <Input value={input} onChange={event => setInput(event.target.value)} aria-describedby="Enter your messege here" />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>
      
    </div>
  );
}

export default App;
