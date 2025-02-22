import React from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BLXCK.chat</h1>
        <p>Your AI Chat Interface</p>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;