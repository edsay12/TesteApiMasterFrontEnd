
import * as S from "./style";
import { AiFillStar } from "react-icons/ai";

type PropTypes = {
  numberOfStars: number;
  totalOfRates: number;
};

function StaticRate({numberOfStars,totalOfRates}:PropTypes) {
  const rate  = Math.ceil(numberOfStars /totalOfRates)
  
  return (
    <S.StartRate>
      {[...Array(5)].map(( index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
             
            />
            <S.Star
              
              starValue={starValue}
              rating={rate}
            >
              <AiFillStar />
            </S.Star>
          </label>
        );
      })}
     
    </S.StartRate>
  );
}

export default StaticRate;
