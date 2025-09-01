"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = { name: string; email: string; role: "user" | "admin" } | null;

// --- UI (for global modals) ---
type UiCtx = {
  isAuthOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
};
const UiContext = createContext<UiCtx | null>(null);
export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within <Providers>");
  return ctx;
}

// --- Auth (replace with NextAuth later if you want) ---
type AuthCtx = {
  user: User;
  signIn: (u: NonNullable<User>) => void;
  signOut: () => void;
};
const AuthContext = createContext<AuthCtx | null>(null);
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <Providers>");
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  // UI state
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Fake auth; swap with NextAuth later
  const [user, setUser] = useState<User>(null);

  const ui: UiCtx = {
    isAuthOpen,
    openAuth: () => setIsAuthOpen(true),
    closeAuth: () => setIsAuthOpen(false),
  };

  const auth: AuthCtx = {
    user,
    signIn: (u) => setUser(u),
    signOut: () => setUser(null),
  };

  return (
    <UiContext.Provider value={ui}>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </UiContext.Provider>
  );
}
