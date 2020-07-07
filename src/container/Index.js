import React, { useState } from 'react';

function Index(props) {
  const [count, setCount] = useState(4);
  return (
    <div>
      <h1>hello {props.title}!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
  );
}

export default Index;
