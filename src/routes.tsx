import Home from "./pages/Home";
import { ReactNode} from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/index.tsx";
import Error404 from "./pages/404/index.tsx";
import Favoritos from "./pages/Favoritos/index.tsx";
import { useAuth } from "./hooks/useAuth.ts";
import { useModal } from "./hooks/useModal.ts";


// autorização
function PrivateRoute({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  const { user} = useAuth();
  const isAuthenticate = user ? true : false;
  const {oppenModal } = useModal()
  
  if(!user){
    oppenModal()

  }

  return isAuthenticate ? children : <Navigate to={redirectTo} /> ;
}

function PrivateLogin({
  children,
  redirectTo,
}: {
  children: ReactNode;
  redirectTo: string;
}) {
  const { user } = useAuth();
  const isAuthenticate = !user ? false : true;


  return !isAuthenticate ? children : <Navigate to={redirectTo} />;
}


function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/auth"
        element={<PrivateLogin redirectTo="/" children={<Auth />} />}
      />

      <Route
        path="/favoritos"
        element={<PrivateRoute redirectTo={"/"} children={<Favoritos />} />}
      />
    </Routes>
  );
}

export default MyRoutes;
