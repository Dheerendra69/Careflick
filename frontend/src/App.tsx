import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Toaster position="top-right" />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;