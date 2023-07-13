import { createContext, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { User } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export type UserProps = {
  user: User
  
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserLogin) => void;
  logout: () => void;
};
type UserLogin = {
  email: string;
  senha: string;
};
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("sessionUser");
    if (user) [setUser(JSON.parse(user))];
  }, []);

  const login = ({ email, senha }: UserLogin): void => {
    AuthService.login(email, senha)
      .then((user) => {
        localStorage.setItem("sessionUser", JSON.stringify(user));
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
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
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
