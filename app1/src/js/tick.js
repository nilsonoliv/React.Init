import React from 'react';


const tick = function(){

    //const tack = function() {
        const element = (
          <div>
            <h1>Hello World DO TICK FUNCTION</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
    
          </div>
        )
        //return element
        
      //}
      setInterval(element, 1000);
      //setInterval(tack(), 1000);
      
}

  export default tick;