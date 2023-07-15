import * as firebaseAuth from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { toast } from "react-toastify";


class AuthService {
  login(email: string, senha: string) {
    return firebaseAuth
      .signInWithEmailAndPassword(auth, email, senha)
      .then((user) => {
        toast.success('Login feito com sucesso')
        return user;
      })
      .catch((error) => {
        toast.error('Usuario ou senha incorretos')
        return Promise.reject(error);
      });
  }
  logout() {
    return firebaseAuth.signOut(auth).then(()=>{
      toast.success('Voce foi deslogado com exito')
    });
  }
  createNewUser(email: string, senha: string) {
    return firebaseAuth
      .createUserWithEmailAndPassword(auth, email, senha)
      .then((data) => {
        toast.success('Usuario Criado.')
        return data;
      })
      .catch((error) => {
        toast.error('Email ja cadastrado.') // um feedback um tanto quanto estranho haha
        return Promise.reject(error);
      });
  }
  getLoggedUser() {
    return new Promise<firebaseAuth.User>((resolve,reject) => {
      firebaseAuth.onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(null);
        }
        
        
      });
    });
  }
}

export default new AuthService();
