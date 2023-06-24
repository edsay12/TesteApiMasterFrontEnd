import * as S from "./style";

function GameContainer({ children }: { children: React.ReactNode }) {
  return <S.MovieContainer>{children}</S.MovieContainer>;
}

export default GameContainer;
