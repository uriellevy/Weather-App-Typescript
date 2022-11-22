import React from 'react';
import classes from './App.module.scss';
import HomeView from './components/HomeView';
import { WeatherProvider } from './context/context';

function App() {
  return (
    <div className={classes.App}>
      <WeatherProvider>
        <HomeView />
      </WeatherProvider>
    </div>
  );
}

export default App;
