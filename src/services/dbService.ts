import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { toast } from "react-toastify";

type Favorito = {
  gameId: string;
};

type GameRated = {
  gameId: string;
  rate: number;
};

type UserData = {
  userId: string;
  userName: string;
  favorites: Favorito[];
  gamesRate: GameRated[];
};

class dbService {
  useCollection = collection(db, "users");

  async getUser(userId: string): Promise<UserData | null> {
  
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as UserData;
        // localStorage.setItem("dbUser", JSON.stringify(userData));
        return userData;
      } else {
    
        toast('Ouve um erro interno, volte novamente mais tarde')

        return null;
      }
    } catch (error) {
      // usuario não encontrado
      toast('Ouve um erro interno, volte novamente mais tarde')
      return null;
    }
  }

  async updateUserFavorites(userId: string, newFavoriteId: string) {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const favorites = userData.favorites || [];

        const existingFavorite = favorites.find(
          (favorite: { gameId: string }) => favorite.gameId === newFavoriteId
        );

        if (existingFavorite) {
          // Se o novo favorito ja existe, remove-o do array de favoritos
          const updatedFavorites = favorites.filter(
            (favorite: { gameId: string }) => favorite.gameId !== newFavoriteId
          );
          toast.success("Favorito removido!");
          await updateDoc(userRef, {
            favorites: updatedFavorites,
          });
        } else {
          // Caso contrario, adiciona o novo favorito ao array de favoritos
          const newFavorite = { gameId: newFavoriteId };
          const updatedFavorites = [...favorites, newFavorite];
          toast.success("Favorito adicionado!");
          await updateDoc(userRef, {
            favorites: updatedFavorites,
          });
        }
      } else {
        // usuario não encontrado
        toast('Ouve um erro interno, volte novamente mais tarde')
      }
    } catch (error) {
      toast.error(`Tivemos Problemas ao atualizar os favoritos : ${error}`);
    }
  }

  async addGameRate(userId: string, gameId: string, rate: number) {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const gamesRate = userData.gamesRate || [];

        const existingGameRate = gamesRate.find(
          (gameRate: { gameId: string }) => gameRate.gameId === gameId
        );

        if (existingGameRate) {
          toast("O jogo ja foi avaliado !");
        } else {
          // Adiciona o novo jogo e sua avaliação ao array de gamesRate
          const newGameRate = { gameId, rate };
          const updatedGamesRate = [...gamesRate, newGameRate];
          toast.success("Avaliação adicionada!");
          await updateDoc(userRef, {
            gamesRate: updatedGamesRate,
          });
        }
      } else {
        // usuario não encontrado
        toast('Ouve um erro interno, volte novamente mais tarde')
      }
    } catch (error) {
      toast.error(`Tivemos Problemas ao atualizar os favoritos: ${error}`);
    }
  }

  async newUser(userId: string, name: string) {
    try {
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, { name });
    } catch (error) {
      toast.error(
        "Erro ao adicionar usuario, Porfavor tenten novamenta mais tarde"
      );
    }
  }
}

export default new dbService();
