import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Player from './components/Player';
import SecondsCounter from './components/SecondsCounter';




const intervalID = setInterval(myCallback, 1000);

let seconds = 0
function myCallback() {
  // Your code here
  // Parameters are purely optional.
  console.log("paso un segundo");
  seconds++
  console.log('han pasado ' + seconds+' segundos')
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds}/>
    </React.StrictMode>,
  )
  
}
