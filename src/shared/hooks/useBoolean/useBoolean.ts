import { useCallback, useState } from 'react';

export const useBoolean = (initialState = false) => {
  const [isBoolean, setBoolean] = useState(initialState);

  const setFalse = useCallback(() => setBoolean(false), []);
  const setTrue = useCallback(() => setBoolean(true), []);
  const toggle = useCallback(() => setBoolean((prev) => !prev), []);

  return {
    isBoolean,
    setFalse,
    setTrue,
    toggle,
  };
};
