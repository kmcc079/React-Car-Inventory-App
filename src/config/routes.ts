import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean,
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/account",
      component: Account,
      name: "Account",
      protected: false,
    },
  ];

  export default routes