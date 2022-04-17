import { useCallback, useState } from 'react';

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
