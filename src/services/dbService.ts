import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


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
  favoritos: Favorito[];
  gamesrated: GameRated[];
};

class dbService {
  useCollection = collection(db, "users");

  async getUserById({ userId = "" }: { userId: string }) {
    const data = await getDocs(this.useCollection);
    const users: UserData[] = data.docs.map((doc) => {
      const { userId, userName, favoritos, gamesrated } = doc.data();
      return {
        userId,
        userName,
        favoritos: favoritos || [],
        gamesrated: gamesrated || [],
      };
    });

    const userbyid: UserData[] = users.filter((user) => user.userId === userId);
    return userbyid[0].favoritos.map;
  }
  async newUser(userId: string, name: string) {
    await addDoc(this.useCollection, { userId, name, favoritos: [{}],gamesRated:[{}] });
  }
  async addFavoritos(gameId:string,){
    await updateDoc(doc(db,'users','asdasd'),{
        favoritos:[gameId]

    })
  }
}

export default new dbService();
