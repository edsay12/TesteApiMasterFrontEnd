
import { ApiData } from "../../@types";
import * as S from "./style";
import {MdOutlineArrowForwardIos} from 'react-icons/md'

type MovieCardProps = {
  data: ApiData;
};
function GameCard({ data }: MovieCardProps) {
  const dateObject = new Date(data.release_date);
  const year = dateObject.getFullYear();
  return (
    <S.MovieCard>
      <S.CardImage src={data.thumbnail} alt="Imagem de um game" />
      <S.CardBotton>
        <S.CardTitle key={data.id}>{data.title}</S.CardTitle>
        <S.CardDetails>
          <p>{data.publisher}</p>-
          <p>{year}</p>-
          <p>{data.genre}</p>
        </S.CardDetails>


        <S.CardDescription>{data.short_description}</S.CardDescription>
        <S.CardButton href={data.game_url} target="_blank">
          <p>Saiba mais</p>
          <span><MdOutlineArrowForwardIos/></span>
        </S.CardButton>
      </S.CardBotton>
    </S.MovieCard>
  );
}

export default GameCard;
