/* eslint-disable prefer-const */
import { ApiData, UserData } from "../../@types";
import * as S from "./style";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

import StarRate from "../StarRate/DinamicRate";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import dbService from "../../services/dbService";

type MovieCardProps = {
  data: ApiData;
  dbUserData: UserData | null;
  unLikedAction?: () => void;
};
function GameCard({
  data: gameData,
  dbUserData,
  unLikedAction,
}: MovieCardProps) {
  const dateObject = new Date(gameData.release_date);
  const year = dateObject.getFullYear();
  const [isLiked, setIsLiked] = useState(false);

  const { oppenModal } = useModal();

  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        if (dbUserData?.favorites) {
          dbUserData.favorites.forEach((game) => {
            if (game.gameId === gameData.id) {
              setIsLiked(true);
            }
          });
        }
      }
    };

    fetchData();
  }, [user, dbUserData?.favorites]);

  function handleLiked() {
    if (!user) {
      oppenModal();
    } else {
      dbService.updateUserFavorites(user.user.uid, gameData.id).then((data) => {
        setIsLiked(false);
        if (unLikedAction) {
          unLikedAction();
        }
      });
    }
  }

  return (
    <>
      <S.MovieCard>
        <S.CardImageContainer>
          <S.CardImage src={gameData.thumbnail} alt="Imagem de um game" />
        </S.CardImageContainer>
        <S.CardBotton>
          <S.CardTitle key={gameData.id}>{gameData.title}</S.CardTitle>
          <S.CardDetails>
            <p>{gameData.publisher}</p>-<p>{year}</p>-<p>{gameData.genre}</p>
          </S.CardDetails>
          <S.CardRatingContainer>
            <S.CardRate>
              <StarRate
                gameId={gameData.id}
                data={gameData}
                dbUserData={dbUserData}
              />
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

          <S.CardDescription>{gameData.short_description}</S.CardDescription>
          <S.CardButton href={gameData.game_url} target="_blank">
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
