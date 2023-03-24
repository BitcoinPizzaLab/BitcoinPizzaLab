import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  time: number; // time in seconds
}

export const Countdown: React.FC<CountdownProps> = ({ time }) => {
  const [seconds, setSeconds] = useState<number>(Number((time/1000).toFixed(0)));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <Box>
      T - {days}D : {hours}H : {minutes}min  : {remainingSeconds}sec
    </Box>
  );
};