export type AccountsConfig = {
  accountsApiUrl: string;
};

let config: AccountsConfig | null = null;

export function initAccounts(moduleConfig: AccountsConfig) {
  if (config) {
    throw new Error("Module already initialized");
  }

  config = moduleConfig;
}
export function getAccountsConfig(): AccountsConfig {
  if (!config) {
    throw new Error("Module not initialized. Call initModule first.");
  }

  return config;
}
