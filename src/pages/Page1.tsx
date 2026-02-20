import { GenericButton } from "@thiagomoraesn13/ui";
import { useSimulation } from "../simulation-context";
import { SectionTitle } from "../SectionTitle";

export const CI_ENV_CHECK = {
  url: import.meta.env.VITE_ACCOUNTS_API_URL,
  id: import.meta.env.VITE_API_CLIENT_ID,
};

export function Page1() {
  const { goToOnboarding, assetsBaseUrl, theme } = useSimulation();
  const logoUrl = `${assetsBaseUrl}/${theme}/logo.png`;

  console.log(import.meta.env);

  console.log("CI_ENV_CHECK", CI_ENV_CHECK);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Simulation • Página 1</h2>

      <SectionTitle title="funciona sera" subtitle="tomara" />
      <img src={logoUrl} alt="logo nao veio" />

      <div className="flex gap-4">
        <GenericButton
          variant="primary"
          width="full"
          type="button"
          onClick={() => goToOnboarding()}
        >
          Ir para onboarding
        </GenericButton>

        <GenericButton
          variant="secondary"
          width="full"
          type="button"
          onClick={() => goToOnboarding()}
        >
          Ir para onboarding
        </GenericButton>
      </div>
    </div>
  );
}
