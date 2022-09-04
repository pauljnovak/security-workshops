import { DependencyList, useCallback} from "react";

export default function useOnEnter(callback: (arg0: any) => void, inputs: DependencyList) {
  return useCallback((event: { key: string; preventDefault: () => void; }) => {
    if (event.key === "Enter") {
      event.preventDefault();
      callback(event);
    }
  }, inputs);
}
