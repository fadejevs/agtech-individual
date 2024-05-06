import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import NewsFeed from './Newsfeed';

const App = () => {
  return (
    <div className="App">
      <h1>Farmer's education</h1>
      <div className='chatbot'>
      <ChatBot steps={[{ id: '1', message: 'Howdy, What can I help you with?', trigger: 'userInput' },
                       { id: 'userInput', user: true, trigger: 'fetchAIResponse' },
                       { id: 'fetchAIResponse', waitAction: true, asMessage: true }]}/>
      </div>
      {/* this will be the API newsfeed */}
      {/* <NewsFeed /> */} 
    </div>
  );
};

export default App;