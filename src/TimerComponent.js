import { useState } from 'react';

const TimerComponent = () => {
    const [time, setTime] = useState(0);
    const [intervalId, setintervalId] = useState(0);

    function handleStart() {
      let _time = 0;
      const id = setInterval(() => {
         if(_time === 6) {
            setTime(0);
      } else {
         setTime(function(count) {
            _time = count +1;
            return _time;
         });
       }
      }, 1000);

      setintervalId(id);
    }

    function handleStop() {
      clearInterval(intervalId);
    }

    return (
    <div>
       <h2>{time}</h2>
       <button onClick={handleStart}>Start</button>
       <button onClick={handleStop}>Stop</button>
    </div>
    );
} ;

export default TimerComponent;