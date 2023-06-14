import Home from "../pages/Home";
import Login from "../pages/login";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";

export const routePublic = [
    { path: '/', page: <Home /> },
    { path: '/login', page: <Login /> },
    { path: '/cart', page: <Cart /> },
    { path: '/detail/:id', page: <Detail /> }

]
