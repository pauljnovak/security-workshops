import {ChangeEventHandler, useCallback, useState} from "react";

const useInput = (defaultValue?: string) : { newValue: string, onNewValueChange: ChangeEventHandler<HTMLInputElement>, setNewValue: (value: string) => void} => {
  const [value, setValue] = useState(defaultValue || "");

  // @ts-ignore
  const onChange = useCallback(event => {
    setValue(event.target.value);
  });

  // @ts-ignore
  return { newValue: value, onNewValueChange: onChange, setNewValue: setValue };
}

export default useInput
