import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default RootLayout;
