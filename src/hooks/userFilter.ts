import { useState } from "react";
import { ApiData } from "../@types";
import dbService from "../services/dbService";
import { useAuth } from "./useAuth";

function useFilter(data: ApiData[] = []) {
  const [busca, setBusca] = useState<string>("");
  const [genero, setGenero] = useState<string>("");

  const datafiltred = data?.filter(
    (data) =>
      (genero === "" || genero === "Todos" || data.genre === genero) &&
      data.title.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  );

  return { datafiltred, setBusca, setGenero, genero };
}

export default useFilter;
