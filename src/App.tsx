import React from 'react';
import './App.css';
import HomeView from './components/HomeView';
import { WeatherProvider } from './store/context';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <HomeView />
      </WeatherProvider>
    </div>
  );
}

export default App;
