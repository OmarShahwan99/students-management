import "./App.css";
import RouterContent from "./routes/router-content";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <RouterContent />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
