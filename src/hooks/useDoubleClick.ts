export default function useDoubleClick(onClick: ((arg0: any, arg1: any) => void) | null, onDoubleClick: (arg0: any, arg1: any) => void) {
  let clicks: number[] = [];
  let timeout: string | number | NodeJS.Timeout | undefined;

  return (event: any, ...rest: any) => {
    clicks.push(new Date().getTime());

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (
        clicks.length > 1 &&
        clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250
      ) {
        if (onDoubleClick) {
          // @ts-ignore
          onDoubleClick(event, ...rest);
        }
      } else if (onClick) {
        // @ts-ignore
        onClick(event, ...rest);
      }
      clicks = [];
    }, 250);
  };
}
