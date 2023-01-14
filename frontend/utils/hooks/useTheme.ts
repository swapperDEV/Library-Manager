import { useEffect } from "react";
import { useLocalStorage, useMediaQuery, useUpdateEffect } from "usehooks-ts";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface UseDarkModeOutput {
  isDarkMode: boolean;

  toggle: () => void;

  enable: () => void;

  disable: () => void;
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const [isDarkMode, setDarkMode] = useLocalStorage<any>(
    "usehooks-ts-dark-mode",

    defaultValue ?? isDarkOS ?? false
  );

  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,

    toggle: () => setDarkMode((prev: any) => !prev),

    enable: () => setDarkMode(true),

    disable: () => setDarkMode(false),
  };
}

export default useDarkMode;
