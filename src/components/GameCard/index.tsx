/* eslint-disable prefer-const */
import { ApiData } from "../../@types";
import * as S from "./style";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";


import StarRate from "../StarRate/DinamicRate";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import { toast } from "react-toastify";
import dbService from "../../services/dbService";

type MovieCardProps = {
  data: ApiData;
};
function GameCard({ data }: MovieCardProps) {
  const dateObject = new Date(data.release_date);
  const year = dateObject.getFullYear();
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState<number >(0);

  let gameData = data
  const { oppenModal } = useModal();

  const { user } = useAuth();

  useEffect(()=>{
      if(user){
        dbService.getUser(user.user.uid).then((data)=>{
          data?.favorites.map((game)=>{
            if(game.gameId == gameData.id){
              setIsLiked(true)
            }
          })
        })
      }
  },[])

  function handleLiked() {
    if (!user) {
      oppenModal()
      
    }
    else{
      dbService.updateUserFavorites(user.user.uid,data.id)
      setIsLiked((like) => !like)

      
    }
  }


  return (
    <>
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
              <StarRate gameId={data.id} />
              <S.Rate>4.6</S.Rate>
              <S.NumberOfRates>(86)</S.NumberOfRates>
            </S.CardRate>
            <S.LikeIcon
              onClick={() => {
                handleLiked();
              }}
              isLiked={isLiked}
            >
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
