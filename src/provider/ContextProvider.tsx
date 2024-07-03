import React, { createContext, ReactNode, useRef } from "react";

export interface ContextValue {
  sendCoinRef: React.MutableRefObject<HTMLInputElement | null>;
  scrollToTarget: () => void;
}

interface ContextProps {
  children: ReactNode;
}

export const InfoContext = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const sendCoinRef = useRef<HTMLInputElement>(null);

  const scrollToTarget = () => {
    if (sendCoinRef.current) {
      sendCoinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dataObject: ContextValue = {
    sendCoinRef,
    scrollToTarget,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};

export default ContextProvider;
