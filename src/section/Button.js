import React from "react";

const Button = () => {
    const [counter, setCounter] = React.useState(0);
    return(
      <div className="maindiv">
        <div className="counter">
          <h1 id="display">{ counter }</h1>
          <div>
              <button id="button"  onClick={ () => setCounter( counter + 1 )} >Increment +</button>
          </div>
        </div>
      </div>
    );
};

export default Button;