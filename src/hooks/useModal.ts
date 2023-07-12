import { useContext } from "react";

import { ModalContext } from "../context/modalAuthContext/modalContext";


const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export {useModal}