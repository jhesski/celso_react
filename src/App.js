import React from 'react';
import './App.css';
import Player from './components/Player/Player';
import View from './components/View/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <View>
        <Player />
      </View>  
      </header>
    </div>
  );
}

export default App;
