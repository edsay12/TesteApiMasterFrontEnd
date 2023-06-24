import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyled.ts";
import { theme } from "../theme.ts";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
