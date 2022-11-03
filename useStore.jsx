import { useState, useRef, useCallback, useEffect, useReducer } from 'react';

const publicState = {};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === 'set') {
    return {
      ...state,
      ...payload,
    };
  }
};

const useStore = (privateStore = {}) => {
  const [payload, setPayload] = useState(false);
  const callbackRef = useRef();
  const isFirstCallbackCall = useRef(true);
  const [state, dispatch] = useReducer(reducer, { ...publicState, ...privateStore });
  const setState = useCallback((payload, callback) => {
    dispatch({ type: 'set', payload });
    callbackRef.current = payload => callback(payload);
    setPayload(payload);
  }, []);
  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    callbackRef.current && callbackRef.current(payload);
  }, [payload]);
  return [state, setState];
};

export default useStore;
