import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { LanguageProvider } from "./contexts/language.context";
import { SettingsProvider } from "./contexts/settings.context";
import { ThemeProvider } from "@emotion/react";
import { ModalProvider } from "./components/ui/modal/modal.context";
import theme from "./theme";
import { Toaster } from "react-hot-toast";
import ManagedModal from "./components/ui/modal/managed-modal";

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SettingsProvider>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              {children}
              <Toaster />
              <ManagedModal />
            </ModalProvider>
          </ThemeProvider>
        </SettingsProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default Providers;
