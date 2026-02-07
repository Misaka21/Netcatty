import { useCallback } from "react";
import { netcattyBridge } from "../../infrastructure/services/netcattyBridge";

export const useClipboardBackend = () => {
  const readClipboardText = useCallback(async (): Promise<string> => {
    const bridge = netcattyBridge.get();
    if (!bridge?.readClipboardText) return "";

    try {
      const text = await bridge.readClipboardText();
      return typeof text === "string" ? text : "";
    } catch {
      return "";
    }
  }, []);

  return { readClipboardText };
};
