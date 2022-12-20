import { useEffect, useState } from "react";

export const usePersistedState = (initialState, key) => {
  const [state, setState] = useState(
    !!localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};