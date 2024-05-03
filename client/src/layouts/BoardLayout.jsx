import UserAuthContextProvider from "../Contexts/UserAuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import LogoutModal from "../components/logoutModal/logoutModal";
import AddSpecialDayModal from "../components/addSpecialDayModal/addSpecialDayModal";

const BoardLayout = () => {
  return (
    // we will use user context for checking session and auth status
    <UserAuthContextProvider>
      <Header />
      <section className="LayoutWrapper flex items-start">
        <Sidebar />
        <section className="PageWrapper w-[94%]">
          <Outlet />
          <AddSpecialDayModal />
          <LogoutModal />
        </section>
      </section>
    </UserAuthContextProvider>
  );
};

export default BoardLayout;
