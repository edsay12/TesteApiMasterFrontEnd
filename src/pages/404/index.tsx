import { Link } from 'react-router-dom'
import Error404Gif from '../../assets/Img/Error404.svg'
import * as S from './style'

export default function Error404(){
    return(
        <S.PageContainer>
            <img src={Error404Gif} alt="" />
            <div className="text">Ooppss!  Parece que você se perdeu!</div>
            <Link to={'/'} >Voltar</Link>
        </S.PageContainer>

    )
}