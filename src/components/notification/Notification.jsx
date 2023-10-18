import React, { useEffect, useRef } from "react";
import styles from "./notification.module.css";

const Notification = ({ message, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timerRef.current); 
    };
  }, [onClose]);

  return (
    <div className={styles.notification}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
