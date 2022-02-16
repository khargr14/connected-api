import React, {useState, useEffect } from "react";

import './App.css';

export default () => {
  const [count, setCount] = useState(0);

  //Similar to componecntDidMount and componentDidUpate:
  useEffect(() => {
    //Update the document title using the brower API
    document.title = `You clicked ${count} times`;
 });

  return (
    <div>
      <p>
        <p>You Clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </p>
    </div>
  );
};