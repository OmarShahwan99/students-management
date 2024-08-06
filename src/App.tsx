import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import RouterContent from "./routes/router-content";
import { ModalProvider } from "./components/ui/modal/modal.context";
import ManagedModal from "./components/ui/modal/managed-modal";
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./contexts/settings.context";
import { LanguageProvider } from "./contexts/language.context";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <SettingsProvider>
            <ThemeProvider theme={theme}>
              <ModalProvider>
                <RouterContent />
                <Toaster />
                <ManagedModal />
              </ModalProvider>
            </ThemeProvider>
          </SettingsProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
