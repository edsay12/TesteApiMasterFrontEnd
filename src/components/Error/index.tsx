import * as S from "./style";
import error from "../../assets/Img/error.png";

function ErrorMessage({ message='OOPS, UM ERRO DESCONHECIDO OCORREU' }: { message: string }) {

  const [part1,part2] = message.split(',')
  return (
    <>
      <>
        <S.ErrorContainer>
          <S.ErrorImage src={error} alt="Imagem de Error" />
          <S.ErrorMessage>{part1},<span>{part2}</span></S.ErrorMessage>
        </S.ErrorContainer>
      </>
    </>
  );
}

export default ErrorMessage;
