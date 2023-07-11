import { AiFillCloseSquare } from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import * as S from "./style";
import { Button } from "../button";
import {useNavigate} from 'react-router-dom'

type PropTypes = {
  gameId: number;
  gameName: string;
  isModalOpen: boolean;
  toggleModal: () => void;
};

function AuthAlert({ isModalOpen, toggleModal }: PropTypes) {
  const navigate = useNavigate()


  if (!isModalOpen) {
    return null;
  }
  return (
    <S.ModalContainer isModalOppen={isModalOpen}>
      <S.Modal>
        <S.ModalHeader>
          <S.IcoContainer onClick={() => toggleModal()}>
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
          <Button onClick={()=> navigate('/auth')}>Login</Button>
        </S.ModalFooter>
      </S.Modal>
    </S.ModalContainer>
  );
}

export default AuthAlert;
