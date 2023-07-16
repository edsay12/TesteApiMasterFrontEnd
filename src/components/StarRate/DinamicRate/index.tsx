import { useEffect, useState } from "react";
import * as S from "./style";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import dbService from "../../../services/dbService";
import { ApiData } from "../../../@types";
import { toast } from "react-toastify";

type Favorito = {
  gameId: string;
};

type GameRated = {
  gameId: string;
  rate: number;
};
type UserData = {
  userId: string;
  userName: string;
  favorites: Favorito[];
  gamesRate: GameRated[];
};

function StarRate({
  gameId,
  data: gameData,
  dbUserData,
}: {
  gameId: string;
  data: ApiData;
  dbUserData: UserData | null;
}) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const { user } = useAuth();
  const { oppenModal } = useModal();

  useEffect(() => {
    if (user) {
      if (dbUserData?.gamesRate) {
        dbUserData?.gamesRate.map((game) => {
          if (game.gameId === gameData.id) {
            setRating(game.rate);
          }
        });
      }
    }
  }, [user, gameData.id, dbUserData?.gamesRate]);

  function handleRate(starValue: number) {
    if (!user) {
      oppenModal();
    } else {
      if (!rating) {
        setRating(starValue);
        dbService.addGameRate(user.user.uid, gameId, starValue);
      } else {
        toast.error("Game ja foi Avaliado");
      }
    }
  }

  return (
    <S.StartRate>
      {[...Array(4)].map((_star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => handleRate(starValue)}
            />
            <S.Star
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              starValue={starValue}
              hover={hover}
              rating={rating}
            >
              <AiFillStar />
            </S.Star>
          </label>
        );
      })}
    </S.StartRate>
  );
}

export default StarRate;
