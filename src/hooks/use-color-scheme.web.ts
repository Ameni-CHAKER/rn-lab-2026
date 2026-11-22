import { useSyncExternalStore } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

const subscribe = () => () => {};

export function useColorScheme() {
  const colorScheme = useRNColorScheme();

  // Prevent server/client hydration mismatch on web.
  const hasHydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return hasHydrated ? colorScheme : "light";
}
