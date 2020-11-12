import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../paginas/Login";
import Inicio from "../paginas/Inicio";
import Informacion from "../paginas/Informacion";
import Cosechar from "../paginas/Cosechar";
import Compostaje from "../paginas/Compost";
import Recomendar from "../paginas/Recomendaciones";
import Layout from "../componentes/Layout";
import Tienda from "../paginas/Tienda";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Layout>
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/informacion" component={Informacion} />
            <Route exact path="/aprender/cosechar" component={Cosechar} />
            <Route exact path="/aprender/compostaje" component={Compostaje} />
            <Route
              exact
              path="/aprender/recomendaciones"
              component={Recomendar}
            />
            <Route exact path="/tienda" component={Tienda} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
