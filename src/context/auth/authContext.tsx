import { createContext, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import dbService from "../../services/dbService";

export type UserProps = {
  user: User;
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserLogin) => void;
  createNewUser: (user: UserLogin) => void;
  logout: () => void;
  isLoadingAuth: boolean;
};
type UserLogin = {
  email: string;
  senha: string;
  username: string;
};
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoadingAuth, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("sessionUser");
    if (user) [setUser(JSON.parse(user))];
  }, []);

  const login = ({ email, senha }: UserLogin): void => {
    setIsLoading(true);
    AuthService.login(email, senha)
      .then((user) => {
        localStorage.setItem("sessionUser", JSON.stringify(user));
        setIsLoading(false);

        setUser(user);
      })
      .catch(() => {
        setIsLoading(false);
        setUser(null);
      });
  };

  const createNewUser = ({ email, senha, username }: UserLogin) => {
    setIsLoading(true);
    AuthService.createNewUser(email, senha)
      .then((data) => {
        dbService.newUser(data.user.uid, username);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    AuthService.logout().then(() => {
      localStorage.removeItem("sessionUser");
      navigate("/");
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        createNewUser,
        isLoadingAuth,
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
