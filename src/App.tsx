import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyled.ts";
import { theme } from "../theme.ts";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/index.tsx";
import Error404 from "./pages/404/index.tsx";
import Favoritos from "./pages/Favoritos/index.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>

        {/* <Home /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
