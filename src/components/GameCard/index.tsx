import { ApiData } from "../../@types";
import * as S from "./style";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import StarRate from "../StarRate/DinamicRate";
import StaticRate from "../StarRate/StaticRate";

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
  return (
    <S.MovieCard>
      <S.CardImageContainer>
        <S.CardImage src={data.thumbnail} alt="Imagem de um game" />
        <S.LikeIcon onClick={() => handleLiked()} isLiked={isLiked}>
          {!isLiked && <AiOutlineHeart />}

          {isLiked && <AiFillHeart />}
        </S.LikeIcon>
      </S.CardImageContainer>
      <S.CardBotton>
        <S.CardTitle key={data.id}>{data.title}</S.CardTitle>
        <S.CardDetails>
          <p>{data.publisher}</p>-<p>{year}</p>-<p>{data.genre}</p>
        </S.CardDetails>
        <S.CardRate>
          <StaticRate numberOfStars={3} totalOfRates={1} />
          <S.Rate>4.6</S.Rate>
          <S.NumberOfRates>(86)</S.NumberOfRates>
          <S.RateModalLink href="#" >Avaliar Game</S.RateModalLink>
        </S.CardRate>

        <S.CardDescription>{data.short_description}</S.CardDescription>
        <S.CardButton href={data.game_url} target="_blank">
          <p>Saiba mais</p>
          <span>
            <MdOutlineArrowForwardIos />
          </span>
        </S.CardButton>
      </S.CardBotton>
    </S.MovieCard>
  );
}

export default GameCard;
