import "styled-components";
import { theme } from "../theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends CustomTheme {} // o erro pode ser ignorado 
}
