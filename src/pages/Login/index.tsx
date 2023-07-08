import { Input } from "../../components/Inputs/Input";

import { Button } from "../../components/button";
import { BsArrowRight } from "react-icons/bs";

import * as S from "./style";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const schema = z.object({
    email: z.string().email({ message: "Este não e um email valido" }),
    senha: z
      .string()
      .min(6, { message: "A senha deve conter no minimo 6 caracteres" }),
  });
  type formProps = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode:'onChange',
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: formProps) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <S.LoginContainer>
        <S.FormContainer>
          <S.FormTitle>LOGIN</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Input
              label="Email"
              borderColor="black"
              type="text"
              helperText={errors.email?.message}
              {...register("email")}
            ></Input>
            <Input
              label="Senha"
              borderColor="black"
              type="password"
              helperText={errors.senha?.message}
              {...register("senha")}
            ></Input>
            <Button>Login</Button>
          </S.Form>
          <S.ForgotPassWordLink href="#">
            Esqueceu sua senha ?{" "}
          </S.ForgotPassWordLink>

          <S.BottonDetails>
            <S.BottonLink to={"/cadastro"}>
              Crie uma nova conta <BsArrowRight />
            </S.BottonLink>
          </S.BottonDetails>
        </S.FormContainer>
      </S.LoginContainer>
    </>
  );
}

export default Login;
