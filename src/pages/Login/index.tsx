import { Input } from "../../components/Inputs/Input";
import NavBar from "../../components/NavBar";
import { Button } from "../../components/button";
import { Delimiter } from "../../components/delimiter";
import * as S from "./style";

function Login() {
  return (
    <>
      <S.LoginContainer>
        <S.FormContainer>
          <S.FormTitle>LOGIN</S.FormTitle>
          <S.Form>
            <Input></Input>
            <Input></Input>

            <Button>Login</Button>
          </S.Form>
          <S.ForgotPassWordLink href="#">Forgot Password ? </S.ForgotPassWordLink>

          <Delimiter fontSize="12px" marginTop="40px" color={"rgba(0, 0, 0, 0.4)"}>
            OR
          </Delimiter>
          <S.BottonDetails>
            <S.BottonText>
              Already a<S.BottonLink href="#"> user ?</S.BottonLink>
            </S.BottonText>
          </S.BottonDetails>
        </S.FormContainer>
      </S.LoginContainer>
    </>
  );
}

export default Login;
