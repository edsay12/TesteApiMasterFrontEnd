import { useEffect, useState } from "react";
import * as S from "./style";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import dbService from "../../../services/dbService";
import { ApiData } from "../../../@types";
import { toast } from "react-toastify";

function StarRate({ gameId, data }: { gameId: string; data: ApiData }) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const { user } = useAuth();
  const { oppenModal } = useModal();
  useEffect(() => {
    if (user) {
      dbService.getUser(user.user.uid).then((data) => {
        if (data?.gamesRate) {
          data?.gamesRate.map((game) => {
            if (game.gameId === gameData.id) {
              setRating(game.rate);
            }
          });
        }
      });
    }
  }, []);

  const gameData = data;
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
      {[...Array(5)].map((_star, index) => {
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
