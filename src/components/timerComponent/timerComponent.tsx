import React, { useEffect } from "react";
import PropTypes from "prop-types";

export type TimerComponentProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  timeIsRunning: boolean;
};

/**
 * @description Timer component
 * @param {number} time
 * @param {Function} setTime
 * @param {boolean} timeIsRunning
 * @returns {JSX}
 */
const TimerComponent: React.FC<TimerComponentProps> = ({
  time,
  setTime,
  timeIsRunning,
}) => {
  // If the timer is available then we will starting the count up
  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    if (timeIsRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [timeIsRunning, setTime]);
  /**
   * @description Formatting the timer component
   * @param {number} time
   * @returns {string}
   */
  const formatTime = (time: number): string => {
    let totalSeconds: number = time;
    const hours: number = Math.floor(totalSeconds / (60 * 60));
    totalSeconds = totalSeconds - hours * 60 * 60;
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds - minutes * 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="ttt-timer" data-testid="ttt-timer">
      {formatTime(time)}
    </div>
  );
};

TimerComponent.propTypes = {
  time: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired,
  timeIsRunning: PropTypes.bool.isRequired,
};

TimerComponent.defaultProps = {
  time: 0,
  setTime: () => {},
  timeIsRunning: false,
};

export { TimerComponent };
