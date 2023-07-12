import * as firebaseAuth from "firebase/auth";
import { auth } from "../firebaseConfig";

class AuthService {
  login(email: string, senha: string) {
    return firebaseAuth
      .signInWithEmailAndPassword(auth, email, senha)
      .then((user) => {
        
        return user;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }
  logout() {
    return firebaseAuth.signOut(auth);
  }
  createNewUser(email: string, senha: string) {
    return firebaseAuth
      .createUserWithEmailAndPassword(auth, email, senha)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  getLoggedUser() {
    return new Promise<firebaseAuth.User>((resolve,reject) => {
      firebaseAuth.onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject("");
        }
        
        
      });
    });
  }
}

export default new AuthService();
