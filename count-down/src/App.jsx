import {
  Outlet
} from 'react-router-dom';

import {
  useContext
} from 'react';

import {
  CountdownContext
} from './context/CountdownContext';

import Timer from './assets/images/timer.jpg';
import './App.css';

function App() {
  const {
    event
  } = useContext(CountdownContext);

  let eventImage = null;

  if (event) {
    eventImage = event.image;
  }

  return (
    <div
      className='class-app'
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${Timer})` }
      }
    >
      <div className='class-container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;