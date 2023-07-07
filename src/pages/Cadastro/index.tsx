import { Input } from "../../components/Inputs/Input";

import { Button } from "../../components/button";
import { BsArrowRight } from "react-icons/bs";

import * as S from "./style";

function Cadastro() {
  return (
    <>
      <S.CadastroContainer>
        <S.FormContainer>
          <S.FormTitle>Cadastro</S.FormTitle>
          <S.Form>
            <Input label="Email" borderColor="black"></Input>
            <Input label="Nicname" borderColor="black"></Input>
            <Input label="Senha" borderColor="black"></Input>
            
            <Button>Cadastrar</Button>
          </S.Form>
          

          <S.BottonDetails>
            <S.BottonLink  to={'/login'}>
              Ja tenho uma conta <BsArrowRight />
            </S.BottonLink>
          </S.BottonDetails>
        </S.FormContainer>
      </S.CadastroContainer>
    </>
  );
}

export default Cadastro;
