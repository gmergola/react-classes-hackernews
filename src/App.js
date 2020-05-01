import React from 'react';
import SearchForm from './SearchForm';
import StoryList from './StoryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <StoryList />
    </div>
  );
}

export default App;
