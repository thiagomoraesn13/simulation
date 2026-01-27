import { createContext, useContext } from "react";

export type SimulationConfig = {
  goToOnboarding: () => void;
  theme: "noverde" | "dotz";
  assetsBaseUrl: string; // "/assets/design-tokens"
};

const SimulationContext = createContext<SimulationConfig | null>(null);

export function SimulationProvider({
  value,
  children,
}: {
  value: SimulationConfig;
  children: React.ReactNode;
}) {
  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const ctx = useContext(SimulationContext);
  if (!ctx) {
    throw new Error("useSimulation must be used inside SimulationProvider");
  }
  return ctx;
}
