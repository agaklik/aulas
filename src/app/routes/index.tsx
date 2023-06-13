import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard, Login } from "../pages";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>   
        <Route path="/entrar" element={<Navigate to="/Login" />} />
        <Route path="/pagina-inicial" element={<Navigate to="/Dashboard" />} />
        
      </Switch>
    </BrowserRouter>
  )
}
