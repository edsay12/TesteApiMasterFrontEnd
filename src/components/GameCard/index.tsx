import { ApiData } from "../../@types";
import * as S from "./style";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

import AuthAlert from "../AuthAlert";
import StarRate from "../StarRate/DinamicRate";

type MovieCardProps = {
  data: ApiData;
};
function GameCard({ data }: MovieCardProps) {
  const dateObject = new Date(data.release_date);
  const year = dateObject.getFullYear();
  const [isLiked, setIsLiked] = useState(false);
  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <AuthAlert
        gameId={data.id}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        gameName={data.title}
      />
      <S.MovieCard>
        <S.CardImageContainer>
          <S.CardImage src={data.thumbnail} alt="Imagem de um game" />
        </S.CardImageContainer>
        <S.CardBotton>
          <S.CardTitle key={data.id}>{data.title}</S.CardTitle>
          <S.CardDetails>
            <p>{data.publisher}</p>-<p>{year}</p>-<p>{data.genre}</p>
          </S.CardDetails>
          <S.CardRatingContainer>
            <S.CardRate>
              <StarRate/>
              <S.Rate>4.6</S.Rate>
              <S.NumberOfRates>(86)</S.NumberOfRates>
              
            </S.CardRate>
            <S.LikeIcon onClick={() => {handleLiked(),toggleModal() }}  isLiked={isLiked}>
              {!isLiked && <AiOutlineHeart />}

              {isLiked && <AiFillHeart />}
            </S.LikeIcon>
          </S.CardRatingContainer>

          <S.CardDescription>{data.short_description}</S.CardDescription>
          <S.CardButton href={data.game_url} target="_blank">
            <p>Saiba mais</p>
            <span>
              <MdOutlineArrowForwardIos />
            </span>
          </S.CardButton>
        </S.CardBotton>
      </S.MovieCard>
    </>
  );
}

export default GameCard;
