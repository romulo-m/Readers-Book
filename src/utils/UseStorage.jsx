import { useCallback, useState } from 'react';
import storage from './Storage';

export default function useStorage(token) {
  const [state, setState] = useState(() => storage.get(token));

  const set = useCallback(newValue => {
    storage.set(token, newValue);
    setState(newValue);
  }, [token]);

  const remove = useCallback(() => {
    storage.remove(token);
    setState(undefined);
  }, [token]);

  return [state, set, remove];
}