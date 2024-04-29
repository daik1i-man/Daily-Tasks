import ActionsProvider from "../Contexts/ActionsContext";
import UserAuthContextProvider from "../Contexts/UserAuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";

const BoardLayout = () => {
  return (
    // we will use user context for checking session and auth status
    <UserAuthContextProvider>
      <ActionsProvider >
        <Header />
        <section className="LayoutWrapper flex items-start">
          <Sidebar />
          <section className="PageWrapper w-full">
            <Outlet />
          </section>
        </section>
      </ActionsProvider>
    </UserAuthContextProvider>
  );
};

export default BoardLayout;
