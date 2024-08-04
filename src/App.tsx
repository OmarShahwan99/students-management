import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import RouterContent from "./routes/router-content";
import { ModalProvider } from "./components/ui/modal/modal.context";
import ManagedModal from "./components/ui/modal/managed-modal";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <RouterContent />
          <Toaster />
          <ManagedModal />
        </ModalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
