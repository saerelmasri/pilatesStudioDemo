"use client";

import { useAuth, useUi } from "@/context/providers";
import AuthModal from "./auth-modal";

export default function AuthModalPortal() {
  const { isAuthOpen, closeAuth } = useUi();
  const { signIn } = useAuth();

  return (
    <AuthModal
      isOpen={isAuthOpen}
      onClose={closeAuth}
      onAuthSuccess={(u) => {
        signIn(u);
        closeAuth();
      }}
    />
  );
}
