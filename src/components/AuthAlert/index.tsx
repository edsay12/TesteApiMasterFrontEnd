import { AiFillCloseSquare } from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import * as S from "./style";
import  Button  from "../button";
import {useNavigate} from 'react-router-dom'
import { useModal } from "../../hooks/useModal";



function AuthAlert() {
  const navigate = useNavigate()
  const {closeModal,isModalOppen} = useModal()


  if (!isModalOppen) {
    return null;
  }
  return (
    <S.ModalContainer isModalOppen={isModalOppen}>
      <S.Modal>
        <S.ModalHeader>
          <S.IcoContainer onClick={() => closeModal()}>
            <AiFillCloseSquare />
          </S.IcoContainer>
        </S.ModalHeader>
        <S.ModalSadIcon>
          <BiSad />
        </S.ModalSadIcon>
        <S.ModalBody>
          <S.Question>È necessário fazer login antes de continuar</S.Question>
        </S.ModalBody>

        <S.ModalFooter>
          <Button onClick={()=> {navigate('/auth'),closeModal()}}>Login</Button>
        </S.ModalFooter>
      </S.Modal>
    </S.ModalContainer>
  );
}

export default AuthAlert;
