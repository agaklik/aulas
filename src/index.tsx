import { BrowserRouter, Route, Routes as Switch, navigate } from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route patch="/entrar" element={<Login />} />
        <Route patch="/pagina-inicial" element={<Dashboard />} />
        <Route patch="*" element={<Navigate to="/pagina-inicial" />} />
      </Switch>
    </BrowserRouter>
  )
}

