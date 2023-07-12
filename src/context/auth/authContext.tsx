import { createContext, useState } from "react";
import AuthService from "../../services/AuthService";
import { User } from "firebase/auth";

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
  
  AuthService.getLoggedUser()
  .then((data) => {
    setUser(data);
      
  })
  .catch((error) => { 
    setUser(error)
  });
  

  
  const [user, setUser] = useState<UserProps | null>(null);

  const login = ({ email, senha }: UserLogin): void => {
    AuthService.login(email, senha)
      .then((user) => {
        setUser(user.user);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
  };

  const logout = () => {
    AuthService.logout();
    setUser(null)
    
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
