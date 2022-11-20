import React from 'react';
import classes from './App.module.scss';
import HomeView from './components/HomeView';
import { WeatherProvider } from './store/context';

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
