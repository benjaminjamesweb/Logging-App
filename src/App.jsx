import React, { useState } from 'react';
import './App.css';
import useLogger from './hooks/useLogger';

function App() {
  const [scope, setScope] = useState('log'); 
  const [selectedFunction, setSelectedFunction] = useState('AddFriend');
  const [message, setMessage] = useState('');


  const handleSubmit = () => {
    useLogger(selectedFunction, scope, message);
  };

  return (
    <div className="main-div">
      <h1>Logging App</h1>
      
      <div className="form">
        <ScopeComponent scope={scope} setScope={setScope} />
        <FunctionComponent selectedFunction={selectedFunction} setSelectedFunction={setSelectedFunction} />
        <MessageComponent message={message} setMessage={setMessage} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <p>Note: the functions drop-down menu only contains strings of imaginary functions which are not actually implemented anywhere (i.e. there is no background logic for "AddFriend", it's literally just a string). I didn't implement those functions because I think the purpose of the assignment is just to display the correct console messages, not actually to create an app for creating and deleting friends. </p>
    </div>
  );
}

function ScopeComponent({ scope, setScope }) {
  return (
    <div className="scope">
      <label>SCOPE</label>
      <select id="scope" value={scope} onChange={(e) => setScope(e.target.value)}>
        <option value="log">LOG</option>
        <option value="error">ERROR</option>
        <option value="warn">WARN</option>
        <option value="debug">DEBUG</option>
      </select>
    </div>
  );
}

function FunctionComponent({ selectedFunction, setSelectedFunction }) {
  return (
    <div className="function">
      <label>FUNCTION</label>
      <select id="function" value={selectedFunction} onChange={(e) => setSelectedFunction(e.target.value)}>
        <option value="AddFriend">AddFriend</option>
        <option value="DeleteFriend">DeleteFriend</option>
        <option value="EditFriend">EditFriend</option>
        <option value="BlockFriend">BlockFriend</option>
      </select>
    </div>
  );
}

function MessageComponent({ message, setMessage }) {
  return (
    <div className="message-input">
      <label>MESSAGE</label>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}

export default App;
