
import { Container } from "../Container";
import * as S from "./style";



function InputArea({children}:{children:React.ReactNode}) {
  return (
    <Container>
      <S.InputArea>
        {children}
      </S.InputArea>
    </Container>
  );
}

export default InputArea;
