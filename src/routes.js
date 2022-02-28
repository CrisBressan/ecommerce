import Home from "./views/Home";
import Categorias from "./views/Categorias";
import Produtos from "./views/Produtos";
import Perfil from "./views/Perfil";

const routes = [
  { path: "/", component: Home },
  { path: "/categorias", component: Categorias },
  { path: "/produtos", component: Produtos },
  { path: "/perfil", component:Perfil },
];

export default routes;
