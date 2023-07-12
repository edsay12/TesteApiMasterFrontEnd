import { Input } from "../../components/Inputs/Input";

import { Button } from "../../components/button";
import { BsArrowRight } from "react-icons/bs";

import * as S from "./style";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import AuthService from "../../services/AuthService";


import { useAuth } from "../../hooks/useAuth";
import dbService from "../../services/dbService";

function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  
  const {login} = useAuth();

  

  const schema = z
    .object({
      email: z.string().email({ message: "O email precisa ser valido" }),
      senha: z
        .string()
        .min(5, { message: "A senha deve conter no minimo 5 caracters" }),
      username: z.string().refine(
        (value) => {
          if (variant === "REGISTER") {
            return value.length >= 5; // e obrigatorio
          } else {
            return true; // Não e obrigatorio
          }
        },
        { message: "O seu username deve conter no minimo 5 caracteres" }
      ),
    })
    .transform((fields) => {
      return {
        ...fields,
        username: variant === "REGISTER" ? fields.username : "",
      };
    });
  type formProps = z.infer<typeof schema>;

  type VarientType = "LOGIN" | "REGISTER";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
      username: "",
    },
  });

  const handleFormSubmit = (dados: formProps) => {
    // eslint-disable-next-line no-var
    var myData = dados
    if (variant === "LOGIN") {
      setIsLoading(true);
      login(dados)
      setIsLoading(false)
    } else if (variant === "REGISTER") {
      AuthService.createNewUser(dados.email, dados.senha)
        .then((data) => {
          console.log("sucesso", data);
          
          dbService.newUser(data.user.uid,myData.username)
          reset();
        })
        .catch((err) => {
          console.log(err);
        });
        
    }
    setIsLoading(false);
  };

  const [variant, setVariante] = useState<VarientType>("LOGIN");

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariante("REGISTER");
    } else {
      setVariante("LOGIN");
    }
  }, [variant]);

  return (
    <>
      <S.LoginContainer>
        <S.FormContainer>
          <S.FormTitle>
            {variant === "REGISTER" ? <p>Cadastrar</p> : <p>Login</p>}
          </S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Input
              label="Email"
              borderColor="black"
              type="text"
              helperText={errors.email?.message}
              {...register("email")}
            ></Input>
            {variant === "REGISTER" && (
              <Input
                label={"nickname"}
                type="text"
                borderColor="black"
                helperText={errors.username?.message}
                {...register("username")}
              />
            )}
            <Input
              label="Senha"
              borderColor="black"
              type="password"
              helperText={errors.senha?.message}
              {...register("senha")}
            ></Input>
            <Button disabled={isLoading}>
              {variant === "REGISTER" ? <p>Cadastrar</p> : <p>Login</p>}
            </Button>
          </S.Form>

          <S.BottonDetails>
            <S.BottonLink onClick={toogleVariant}>
              {variant === "REGISTER" ? (
                <p>Ja possuo uma conta</p>
              ) : (
                <p>Ainda não tenho uma conta</p>
              )}

              <BsArrowRight />
            </S.BottonLink>
           
          </S.BottonDetails>
        </S.FormContainer>
      </S.LoginContainer>
    </>
  );
}

export default Auth;
