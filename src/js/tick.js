import ReactDOM from 'react-dom/client';
import React from 'react';


const tick = function(){

    const tack = function() {
        const element = (
          <div>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
    
          </div>
        )
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(element); 
      }
      setInterval(tack, 1000);
}

  export default tick;