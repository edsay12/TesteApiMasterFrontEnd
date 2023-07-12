import { createContext, useState } from "react";
import AuthService from "../../services/AuthService";
import { User } from "firebase/auth";
import { toast } from "react-toastify";

export type UserProps = User;

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

  useState(() => {
    const user = localStorage.getItem("sessionUser");
    if (user) [setUser(JSON.parse(user))];
    
  }, []);

  const login = ({ email, senha }: UserLogin): void => {
    AuthService.login(email, senha)
      .then((user) => {
        localStorage.setItem("sessionUser", JSON.stringify(user));
        setUser(user.user);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
  };

  const logout = () => {
    AuthService.logout().then(() => {
      localStorage.removeItem("sessionUser");
      setUser(null);
      toast.success("Voce nao esta mais logado ! ");
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
