import React, {useState, useEffect} from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messege, setMessege] = useState([
    {"id":1,"name":"John","message":"Hello","timestamp":"12:00"},
    {"id":2,"name":"Doe","message":"hi!","timestamp":"12:05"},
    {"id":1,"name":"John","message":"How are you?","timestamp":"12:10"},
    {"id":2,"name":"Doe","message":"I am fine","timestamp":"12:15"}
  ]);

  return (
    <div className="App">     
      <img src={logo} alt="logo" />
      <span><h2>Facebook Messenger Clone</h2>Using Firebase Realtime Database</span>

      <div className="app__messages">
        {
          messege.map(message => {
            return <p>{message}</p>
          })
        }
      </div>

      <form className='app__messageForm'>
        <input value={input} onChange={event => setInput(event.target.value)} className='app__message' type="text" placeholder="Enter your messege here" />
        <button disabled={!input} className='app__sendMessege' type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
