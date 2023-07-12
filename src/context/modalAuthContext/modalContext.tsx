import { ReactNode, createContext, useState } from "react";

type ModalContext = {
  isModalOppen: boolean;
  oppenModal: () => void;
  closeModal: () => void;
};
const ModalContext = createContext<ModalContext>({} as ModalContext);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOppen, setIsModalOppen] = useState<boolean>(false);

  function oppenModal() {
    setIsModalOppen(true);
  }
  function closeModal() {
    setIsModalOppen(false);
  }

  return (
    <ModalContext.Provider value={{ isModalOppen, oppenModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
