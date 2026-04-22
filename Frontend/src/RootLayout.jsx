import React from "react";
import { Outlet, useLocation } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import { InterviewProvider } from "./features/interview/interview.context.jsx";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function RootLayout() {
  if (!publishableKey) {
    throw new Error(
      "Missing VITE_CLERK_PUBLISHABLE_KEY. Add it to PrepAI/Frontend/.env"
    );
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      afterSignInUrl="/app"
      afterSignUpUrl="/app"
      signInUrl="/login"
      signUpUrl="/register"
      appearance={{
        variables: {
          colorPrimary: "#ff2d78",
          colorBackground: "#161b22",
          colorText: "#e6edf3",
          colorTextSecondary: "#7d8590",
          colorInputBackground: "#1e2535",
          colorInputText: "#e6edf3",
          borderRadius: "12px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        },
        elements: {
          card: { boxShadow: "none", border: "none", background: "transparent", width: "100%" },
          headerTitle: { color: "#e6edf3" },
          headerSubtitle: { color: "#7d8590" },
          socialButtonsBlockButton: {
            border: "1px solid #2a3348",
            background: "#0d1117",
            color: "#e6edf3",
          },
          dividerLine: { background: "#2a3348" },
          dividerText: { color: "#7d8590" },
          formFieldLabel: { color: "#7d8590", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem" },
          formFieldInput: {
            background: "#1e2535",
            border: "1px solid #2a3348",
            color: "#e6edf3",
          },
          formButtonPrimary: {
            background: "#ff2d78",
            color: "white",
            fontWeight: 700,
            borderRadius: "999px",
          },
          footerActionLink: { color: "#ff2d78" },
          formFieldAction: { color: "#ff2d78" },
          identityPreviewText: { color: "#e6edf3" },
          identityPreviewEditButton: { color: "#ff2d78" },
          alertText: { color: "#e6edf3" },
          alert: { border: "1px solid #2a3348", background: "#0d1117" },
        },
      }}
    >
      <InterviewProvider>
        <ScrollToTop />
        <Outlet />
      </InterviewProvider>
    </ClerkProvider>
  );
}

