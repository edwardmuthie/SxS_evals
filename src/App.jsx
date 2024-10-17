import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!!</h1>
    </div>
  );
};

const Chat = () => {
  return (
    <div>
      <h1>Welcome to the Chat!</h1>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
