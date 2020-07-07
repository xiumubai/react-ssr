import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getIndexList } from '../store/index';

function Index(props) {
  const [count, setCount] = useState(4);
  useEffect(() => {
    console.log(props);
    props.getIndexList();
  }, []);
  return (
    <div>
      <h1>hello {props.title}!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>累加</button>
      <hr />
      <ul>
        {props.list.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => (
    {
      list: state.index.list,
    },
    { getIndexList }
  )
)(Index);
