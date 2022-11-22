import React, {useState, useEffect} from 'react';
import classes from "../App.module.scss"

export const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    const refreshTime = () => {
        setDate(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        const timerId = setInterval(refreshTime, 1000);
        return () => {clearInterval(timerId)};
    },[]);

  return (
    <div className={classes.clock}>{date}</div>
  )
}
