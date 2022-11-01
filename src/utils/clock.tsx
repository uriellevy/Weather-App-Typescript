import React, {useState, useEffect} from 'react'

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
    <div>{date}</div>
  )
}
