import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ROLE_HOME, ROLE_LABEL, type Role } from "@/lib/demo-data";
import { setAccessToken, setApiKey, getApiKey } from "@/services/shared/infrastructure";

type AuthState = {
  role: Role;
  setRole: (role: Role) => void;
  apiKey: string;
  setDemoApiKey: (key: string) => void;
  homePath: string;
  roleLabel: string;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("sales");
  const [apiKey, setKey] = useState(getApiKey());

  const value = useMemo(
    () => ({
      role,
      setRole,
      apiKey,
      setDemoApiKey: (key: string) => {
        setApiKey(key);
        setKey(key);
      },
      homePath: ROLE_HOME[role],
      roleLabel: ROLE_LABEL[role],
    }),
    [role, apiKey]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth requires AuthProvider");
  return ctx;
}

export function useSessionBootstrap() {
  // Sandbox: API key auth is enough for console demos
  setAccessToken(null);
}
