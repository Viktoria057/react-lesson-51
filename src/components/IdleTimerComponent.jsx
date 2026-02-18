import { useIdleTimer } from "react-idle-timer";
import { notifyInfo } from "./ToastNotification";
import { useRef } from "react";

export const IdleTimerComponent = () => {
  const idleRef = useRef(null);

  useIdleTimer({
    ref: idleRef,
    timeout: 10000, 
    onIdle: () => {
      notifyInfo("Ви неактивні більше 10 секунд!");
    },
  });

  return null; 
};