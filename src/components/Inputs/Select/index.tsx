import { InputHTMLAttributes } from "react";

import * as S from './style'
type PropTypes = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  data: string[];
} & InputHTMLAttributes<HTMLSelectElement>;

export function Select({ onChange, data, defaultValue, ...rest }: PropTypes) {
    
  return (
    <S.Select title="Select com os generos dos jogos" defaultValue={''} {...rest} onChange={(e) => onChange(e)}>
      <option value="" disabled>
       {defaultValue}
      </option>
      {data.map((item) => {
        return <option key={crypto.randomUUID()} value={item}>{item}</option>;
      })}
    </S.Select>
  );
}
