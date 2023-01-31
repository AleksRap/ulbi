import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState({});

  const handleIncrement = () => {
    setCount({});
  };

  console.log('render');

  return (
    <div className={classes.button}>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};
