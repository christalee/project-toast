import React from 'react';

function useEscapeKey(keyDownHandler) {

  return React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        keyDownHandler(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyDownHandler]);
}

export default useEscapeKey;
