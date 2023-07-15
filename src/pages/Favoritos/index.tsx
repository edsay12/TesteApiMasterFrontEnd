import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import Loading from "../../components/Loading";
import GameContainer from "../../components/GameContainer";
import ErrorMessage from "../../components/Error";
import { Container } from "../../components/Container";
import * as S from "./style";
import NavBar from "../../components/NavBar";
import { Banner } from "../../components/Banner";
import InputArea from "../../components/InputArea";
import { Delimiter } from "../../components/delimiter";
import { ApiData } from "../../@types";
import useFilter from "../../hooks/userFilter";
import Footer from "../../components/Footer";
import { Input } from "../../components/Inputs/Input";
import { Select } from "../../components/Inputs/Select";
import useFetch from "../../hooks/useFetch";
import { useAuth } from "../../hooks/useAuth";
import dbService from "../../services/dbService";
import { TbSortDescending2, TbSortAscending2 } from "react-icons/tb";

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
  gamesrated: GameRated[];
};

type JogosFavoritadosProps = ApiData & { rate: number | null };

type Order = "asc" | "desc";
function Favoritos() {
  const [generosUnicos, setGenerosUnicos] = useState<string[]>([]);
  const { user } = useAuth();
  const dbUserPromise = dbService.getUser(user ? user?.user.uid : "");
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [rates, setRates] = useState<GameRated[]>();
  const [currentOrder, setCurrentOrder] = useState<Order>("desc");

  const currentOrderToggle = () => {
    console.log(currentOrder);
    setCurrentOrder((current) => {
      return current === "asc" ? "desc" : "asc";
    });
  };

  const {
    isLoading,
    error: apiError,
    data: apiData,
  } = useFetch<ApiData>("/data");

  // filter
  const {
    datafiltred: filtredMovies,
    setBusca,
    setGenero,
    genero,
  } = useFilter(apiData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBusca(e.target.value);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(e.target.value);
  };

  useEffect(() => {
    const generos = [...new Set(apiData && apiData.map((item) => item.genre))];
    const generosUnicos = ["Todos", ...generos];
    setGenerosUnicos(generosUnicos);
  }, [apiData]);

  useEffect(() => {
    dbUserPromise.then((data) => {
      if (data) {
        setFavoritos(data.favorites);
        setRates(data.gamesRate);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoritos]);

 

  // pego os jogos favoritos e adiciono a propiedade rate
  
  const jogosFavoritados:JogosFavoritadosProps[] =
    favoritos && favoritos.length > 0
      ? filtredMovies
          .filter((item) =>
            favoritos.some((favorite) => favorite.gameId === item.id)
          )
          .map((jogoFavorito) => {
            const rateEncontrado =
              rates && rates.find((rate) => rate.gameId === jogoFavorito.id);
            return {
              ...jogoFavorito,
              rate: rateEncontrado ? rateEncontrado.rate : null,
            };
          })
      : filtredMovies as JogosFavoritadosProps[];

      const ordenarJogos = (jogos: JogosFavoritadosProps[]) => {
        if (currentOrder === "asc") {
          return jogos.sort((a, b) => {
            if (a.rate === null) return -1;
            if (b.rate === null) return 1;
            return a.rate - b.rate;
          });
        } else {
          return jogos.sort((a, b) => {
            if (a.rate === null) return 1;
            if (b.rate === null) return -1;
            return b.rate - a.rate;
          });
        }
      };

  const jogosOrdenados = ordenarJogos(jogosFavoritados)
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner>
          <S.BannerText>
            Todos os seus <span>favoritos!</span>
          </S.BannerText>
          <InputArea>
            <Input
              type="search"
              placeholder="Nome do jogo"
              onChange={handleChange}
            />
            <Select
              disabled={isLoading}
              data={generosUnicos}
              value={genero}
              onChange={handleSelectChange}
              defaultValue={"Selecione um genero"}
            />
            {/* Botão visual apenas 😁*/}
            <S.OrderFilterContainer onClick={() => currentOrderToggle()}>
              <S.OrderFilterIco>
                {currentOrder === "asc" ? (
                  <TbSortAscending2></TbSortAscending2>
                ) : (
                  <TbSortDescending2></TbSortDescending2>
                )}
              </S.OrderFilterIco>
              <S.OrderFilterText> Ordem</S.OrderFilterText>
            </S.OrderFilterContainer>
            <button type="button">Pesquisar</button>{" "}
          </InputArea>
        </Banner>

        <Container>
          <Delimiter>Todos os seus favoritos </Delimiter>

          <S.Conteudo>
            <Loading isloading={isLoading} />

            {apiError && <ErrorMessage message={apiError} />}

            {!apiError && (
              <>
                <GameContainer>
                  {jogosOrdenados.length > 0 &&
                    jogosOrdenados.map((data) => {
                      return <GameCard key={data.id} data={data}></GameCard>;
                    })}
                </GameContainer>
                {/* se o array estiver vazio e nao estiver em loading */}
                {!isLoading && jogosOrdenados.length == 0 && (
                  <ErrorMessage
                    message={
                      "OOPS, Esse jogo não existe pesquise por mais jogos"
                    }
                  />
                )}
              </>
            )}
          </S.Conteudo>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Favoritos;
