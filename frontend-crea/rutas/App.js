import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../src/paginas/Login";
import Inicio from "../src/paginas/Inicio";
import Informacion from "../src/paginas/Informacion";
import Cosechar from "../src/paginas/Cosechar";
import Compostaje from "../src/paginas/Compost";
import Recomendar from "../src/paginas/Recomendaciones";
import Layout from "../src/componentes/Layout";
import Tienda from "../src/paginas/Tienda";

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
