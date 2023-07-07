import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyled.ts";
import { theme } from "../theme.ts";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/index.tsx";
import Cadastro from "./pages/Cadastro/index.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>

        {/* <Home /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
