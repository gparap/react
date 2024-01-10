/* Created by gparap (c) 2024 */

import { useState } from 'react';

function Timer() {

  //set the state of the variables
  const [hours ,setHours] = useState(0);
  const [minutes ,setMinutes] = useState(0);
  const [seconds ,setSeconds] = useState(0);

  //handle the timer buttons for adding
  const plus = (value) => {
    if (value === "hours") {
      setHours(hours + 1);
    } 
     if (value === "minutes") {
      setMinutes(minutes + 1);
    }
     if (value === "seconds") {
      setSeconds(seconds + 1);
    }
  }

  //handle the timer buttons for subtracting
  const minus = (value) => {
    if (value === "hours" && hours > 0) {
      setHours(hours - 1);
    } 
    if (value === "minutes" && minutes > 0) {
      setMinutes(minutes - 1);
    }
    if (value === "seconds" && seconds > 0) {
      setSeconds(seconds - 1);
    }
  }

  //handle the zero values for hours
  const displayHours = (value) => {
    if (hours <= 9 ) {
      return "0" + hours;
    }
    return hours;
  }
  
  //handle the zero values for minutes
  const displayMinutes = (value) => {
    if (minutes <= 9 ) {
      return "0" + minutes;
    }
    return minutes;
  }

  //handle the zero values for seconds
  const displaySeconds = (value) => {
    if (seconds <= 9 ) {
      return "0" + seconds;
    }
    return seconds;
  }

  //clear all values from the timer
  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  //start the timer
  const start = () => {
    let isCountDownOver = false; // countdown alert flag
    console.log("countdown started...");
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else if (minutes > 0) {
          setMinutes(prevMinutes => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else if (hours > 0) {
              setHours(prevHours => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  stop(interval, isCountDownOver);
                }
              });
              return 59;
            } else {
              stop(interval, isCountDownOver);
            }
          });
          return 59;
        } else if (hours > 0) {
          setHours(prevHours => {
            if (prevHours > 0) {
              return prevHours - 1;
            } else {
              stop(interval, isCountDownOver);
            }
          });
          return 59;
        } else {
          stop(interval, isCountDownOver);
        }
      });
    }, 1000);
  };

  //stop the timer (cancel the Timeout object)
  const stop = (interval, isCountDownOver) => {
    clearInterval(interval);
          if (!isCountDownOver){
            console.log("countdown stopped...");
            alert("Countdown is over!");
            isCountDownOver = true;
          }
          return 0;
  }

  return {
    hours, minutes, seconds,
    plus, minus,
    displayHours, displayMinutes, displaySeconds,
    reset, start
  };

}

export default Timer;
