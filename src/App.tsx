import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyled.ts";
import { theme } from "../theme.ts";

import { AuthProvider } from "./context/auth/authContext.tsx";
import MyRoutes from "./routes.tsx";
import { ModalProvider } from "./context/modalAuthContext/modalContext.tsx";
import AuthAlert from "./components/AuthAlert/index.tsx";

function App() {
  return (
    <>
      <ModalProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AuthAlert />
            <MyRoutes />
          </ThemeProvider>
        </AuthProvider>
      </ModalProvider>
    </>
  );
}

export default App;
