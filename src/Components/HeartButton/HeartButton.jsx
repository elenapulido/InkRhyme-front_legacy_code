import "./HeartButton.css";
import React, { useEffect, useState } from 'react';


function HeartButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      
      }
      );

    return (
        <div>
            <p>You clicked {count} times</p>
            <input id="toggle-heart" type="checkbox"/>
            <label for="toggle-heart" aria-label="like" onClick={() => setCount(count+1)}>❤</label>
                   
        </div>
        
    )

}

export default HeartButton;