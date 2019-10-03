import { useLocalStorage } from './useLocalStorage';

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
    setValue(e.target.value);
  };

  return [value, handleChanges, setValue];
};
