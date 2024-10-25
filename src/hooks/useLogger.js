const useLogger = (selectedFunction, type, actionMessage) => {
    const timestamp = new Date().toLocaleString();
    const logMessage = `[${selectedFunction.toUpperCase()}] [${timestamp}] ${actionMessage}`;
  
    console[type](logMessage);
  };
  
  export default useLogger;