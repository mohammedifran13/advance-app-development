// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        {/* Main content goes here */}
        <div className="content">
          <h1>Welcome to our Boating Reservation System</h1>
          <p>Start planning your next adventure today!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
