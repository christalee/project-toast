import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([])

  function handleDismiss(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  function handleDismissAll() {
    setToastList([]);
  }

  return (
    <ToastContext.Provider value={{toastList, setToastList, handleDismiss, handleDismissAll}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
