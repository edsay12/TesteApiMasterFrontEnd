import { AiFillCloseCircle, AiFillCloseSquare } from "react-icons/ai";
import * as S from "./style";
import { Button } from "../button";
import StarRate from "../StarRate/DinamicRate";
import { IoIosCloseCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

function RateModal() {
    const [isModalOppen,setModalOppen] = useState(false)
  return (
    <S.ModalContainer isModalOppen={isModalOppen}>
      <S.Modal>
        <S.ModalHeader>
          <S.IcoContainer>
            <AiFillCloseSquare />
          </S.IcoContainer>
        </S.ModalHeader>
        <S.ModalBody>
          <S.Question>O que você achou do game ?</S.Question>
          <S.GameName>OverWatch</S.GameName>

          <S.RateContainer>
            <StarRate />
          </S.RateContainer>
        </S.ModalBody>

        <S.ModalFooter>
          <Button>Enviar Avaliaçaão</Button>
        </S.ModalFooter>
      </S.Modal>
    </S.ModalContainer>
  );
}

export default RateModal;
