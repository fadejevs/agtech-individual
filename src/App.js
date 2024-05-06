import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import NewsFeed from './Newsfeed';

const App = () => {
  return (
    <div className="App">
      <h1>The Modern Farmer.</h1>
      <h4>SaaS (Prototype)</h4>
      <div className='chatbot'>
      <ChatBot steps={[{ id: '1', message: 'Howdy, what can I help you with?', trigger: 'userInput' },
                       { id: 'userInput', user: true, trigger: 'AIResponse' },
                       { id: 'AIResponse', component: <AIChatBot />, waitAction: true, asMessage: true }]}/>
      </div>
      <div className='news'>
      <NewsFeed />
      </div>
      <ConsentBanner />
    </div>
  );
};

const AIResponse = async (userInput) => {
  // simulate AI chatbot API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock responses based on user input
  const mockResponses = {
    "hello": "Howdy, how can I help you?",
    "weather": "The current weather is sunny with a slight chance of rain later in the day.",
    "news": "Today's top news: The AGI is here! Here is how you can use it."
  };

  // Default chatbot response
  const defaultResponse = "Sorry! Please ask me something more specific?";
  // returns response which matches user input OR the default response
  return mockResponses[userInput.toLowerCase()] || defaultResponse;
};

const AIChatBot = ({ steps }) => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const getResponse = async () => {
      const aiResponse = await AIResponse(steps.userInput.value);
      setResponse(aiResponse);
    };
    getResponse();
  }, [steps]);

  return <p>{response}</p>;
};

const ConsentBanner = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // more concrete logic can be added in the full application
  };


  return (
    <div className="consent">
      <p>We use cookies. Click accept if you agree!</p>
      {!accepted && <button onClick={handleAccept}>Accept</button>}
    </div>
  );
};

export default App;