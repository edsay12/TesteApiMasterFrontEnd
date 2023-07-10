import { AiFillCloseCircle, AiFillCloseSquare } from "react-icons/ai";
import * as S from "./style";
import { Button } from "../button";
import StarRate from "../StarRate/DinamicRate";

import { useState } from "react";

type PropTypes = {
  gameId: number;
  gameName: string;
  isModalOpen: boolean;
  toggleModal: () => void;
};

function RateModal({ gameId, gameName, isModalOpen, toggleModal }: PropTypes) {
  if(!isModalOpen){
    return null
  }
  return (
    <S.ModalContainer isModalOppen={isModalOpen}>
      <S.Modal>
        <S.ModalHeader>
          <S.IcoContainer onClick={() => toggleModal()}>
            <AiFillCloseSquare />
          </S.IcoContainer>
        </S.ModalHeader>
        <S.ModalBody>
          <S.Question>O que você achou do game ?</S.Question>
          <S.GameName>{gameName}</S.GameName>

          <S.RateContainer>
            <StarRate />
          </S.RateContainer>
        </S.ModalBody>

        <S.ModalFooter>
          <Button>Enviar Avaliação</Button>
        </S.ModalFooter>
      </S.Modal>
    </S.ModalContainer>
  );
}

export default RateModal;
