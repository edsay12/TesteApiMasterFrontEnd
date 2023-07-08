import { Input } from "../../components/Inputs/Input";

import { Button } from "../../components/button";
import { BsArrowRight } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./style";

function Cadastro() {
  const schema = z.object({
    email: z.string().email({ message: "Este não e um email valido" }),
    nickname:z.string().min(4,{message:'O nickname deve conter no minimo 4 caracteres'}),
    senha: z
    .string()
    .min(6, { message: "A senha deve conter no minimo 6 caracteres" }),
    confirmSenha: z.string(),
  }).refine((fields) => fields.senha === fields.confirmSenha, {  
    
    path: ["confirmSenha"],
    message: "As senhas precisam ser iguais",
  })
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
      <S.CadastroContainer>
        <S.FormContainer>
          <S.FormTitle>Cadastro</S.FormTitle>
          <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Input label="Email" borderColor="black" type="text" helperText={errors.email?.message} {...register('email')}></Input>
            <Input label="nickname" borderColor="black" type="text" helperText={errors.nickname?.message} {...register('nickname')}></Input>
            <Input label="Senha" borderColor="black" type="password" helperText={errors.senha?.message} {...register('senha')}></Input>
            <Input label="Confirmar Senha" borderColor="black" type="password" helperText={errors.confirmSenha?.message} {...register('confirmSenha')}></Input>

            <Button type="submit">Cadastrar</Button>
          </S.Form>

          <S.BottonDetails>
            <S.BottonLink to={"/login"}>
              Ja tenho uma conta <BsArrowRight />
            </S.BottonLink>
          </S.BottonDetails>
        </S.FormContainer>
      </S.CadastroContainer>
    </>
  );
}

export default Cadastro;
