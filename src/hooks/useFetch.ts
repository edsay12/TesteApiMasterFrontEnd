import { useEffect, useState } from "react";
import { Axios } from "../configs/axiosConfig";

const statusErrosCodes = ["500", "502", "503", "504", "507", "508", "509"];

function useFetch<T>(
  url: string,
  initialState: T[] = []
): { isLoading: boolean; data: T[]; error: null | string } {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T[]>(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get(url, {
      timeout: 5000, // Timeout de 5s
    })
      .then((data) => {
        setLoading(false);
        return setData(data.data);
      })
      .catch((err) => {
        // Verifico se deu erro relacionado ao tempo
        setLoading(false);
        if (err.code === "ECONNABORTED") {
          return setError(
            "O servidor demorou para responder, tente novamente mais tarde"
          );
        } else if (statusErrosCodes.includes(err.response.status)) {
          return setError(
            "O servidor falhou em responder, tente recarregar a página"
          );
        } else {
          return setError(
            "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
          );
        }
      });
  }, []);

  return { isLoading, data, error };
}

export default useFetch;
