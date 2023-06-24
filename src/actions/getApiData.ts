import { Axios } from "../configs/axiosConfig";
const statusErrosCodes = ["500", "502", "503", "504", "507", "508", "509"];
export function getData(url: string): Promise<string | []> {
  return Axios.get(url, {
    timeout: 5000, // Timeout de 5s
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      // Verifico se deu erro relacionado ao tempo
      if (err.code === "ECONNABORTED") {
        return "O servidor demorou para responder, tente novamente mais tarde";
      } else if (statusErrosCodes.includes(err.response.status)) {
        return "O servidor falhou em responder, tente recarregar a página";
      } else {
        return "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde";
      }
    });
}

getData("data");
