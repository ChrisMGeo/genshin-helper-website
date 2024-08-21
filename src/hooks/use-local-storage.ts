import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorage = <Type>(storageKey: string, fallbackState: Type): [Type, Dispatch<SetStateAction<Type>>] => {
  const getItemRes = localStorage.getItem(storageKey);
  const [value, setValue] = useState<Type>(
    getItemRes === undefined || getItemRes === null
      ? fallbackState
      : JSON.parse(getItemRes)
  );
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, setValue]);
  return [value, setValue];
};
export default useLocalStorage;
