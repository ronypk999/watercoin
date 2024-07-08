import React, { createContext, ReactNode, useRef } from "react";

export interface ContextValue {
  featureRef: React.MutableRefObject<HTMLInputElement | null>;
  whitepaperRef: React.MutableRefObject<HTMLInputElement | null>;
  healthRef: React.MutableRefObject<HTMLInputElement | null>;
  section1Ref: React.MutableRefObject<HTMLInputElement | null>;
  section2Ref: React.MutableRefObject<HTMLInputElement | null>;
  section3Ref: React.MutableRefObject<HTMLInputElement | null>;
  section4Ref: React.MutableRefObject<HTMLInputElement | null>;
  section5Ref: React.MutableRefObject<HTMLInputElement | null>;
  scrollToFeature: () => void;
  scrollToSection1: () => void;
  scrollToSection2: () => void;
  scrollToSection3: () => void;
  scrollToSection4: () => void;
  scrollToSection5: () => void;
  scrollToHealth: () => void;
  scrollToWhitepaper: () => void;
}

interface ContextProps {
  children: ReactNode;
}

export const InfoContext = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const featureRef = useRef<HTMLInputElement>(null);
  const whitepaperRef = useRef<HTMLInputElement>(null);
  const healthRef = useRef<HTMLInputElement>(null);
  const section1Ref = useRef<HTMLInputElement>(null);
  const section2Ref = useRef<HTMLInputElement>(null);
  const section3Ref = useRef<HTMLInputElement>(null);
  const section4Ref = useRef<HTMLInputElement>(null);
  const section5Ref = useRef<HTMLInputElement>(null);
  const scrollToFeature = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToWhitepaper = () => {
    if (whitepaperRef.current) {
      whitepaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSection1 = () => {
    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSection3 = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSection4 = () => {
    if (section4Ref.current) {
      section4Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSection5 = () => {
    if (section5Ref.current) {
      section5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHealth = () => {
    if (healthRef.current) {
      healthRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dataObject: ContextValue = {
    featureRef,
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    healthRef,
    whitepaperRef,
    scrollToWhitepaper,
    scrollToHealth,
    scrollToFeature,
    scrollToSection1,
    scrollToSection2,
    scrollToSection3,
    scrollToSection4,
    scrollToSection5,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};

export default ContextProvider;
