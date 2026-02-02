import { GenericButton } from "@thiagomoraesn13/ui";
import { useSimulation } from "../simulation-context";

export function Page1() {
  const { goToOnboarding, assetsBaseUrl, theme } = useSimulation();
  const logoUrl = `${assetsBaseUrl}/${theme}/logo.png`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Simulation • Página 1</h2>

      <img src={logoUrl} alt="logo nao veio" />

      <GenericButton
        variant="primary"
        width="full"
        type="button"
        onClick={() => goToOnboarding()}
      >
        Ir para onboarding
      </GenericButton>
    </div>
  );
}
