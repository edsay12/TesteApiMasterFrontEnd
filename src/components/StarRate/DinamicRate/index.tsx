import { useState } from "react";
import * as S from "./style";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import dbService from "../../../services/dbService";

function StarRate({ gameId }: { gameId: string }) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const { user } = useAuth();
  const { oppenModal } = useModal();

  function handleRate(starValue: number) {
    if (!user) {
      oppenModal();
    } else {
      setRating(starValue);
      dbService.addGameRate(user.user.uid, gameId, rating);
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
