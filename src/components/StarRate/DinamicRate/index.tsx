import { useId, useState } from "react";
import * as S from "./style";
import { AiFillStar } from "react-icons/ai";

function StarRate() { 
  const [rating, setRating] = useState<number >(0);
  const [hover, setHover] = useState<number >(0);
  return (
    <S.StartRate>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)}
            />
            <S.Star
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              starValue={starValue}
              hover={hover}
              rating={rating}

            >
              <AiFillStar
              />
            </S.Star>
          </label>
        );
      })}
    </S.StartRate>
  );
}

export default StarRate;
