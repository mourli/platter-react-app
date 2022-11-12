import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { SideNavbar } from "./SideNavbar";
import { TopNavbar } from './TopNavbar';


export const MainLayout = (props: any) => {
  //From redux stor
  const { mainNavToggle } = useSelector((state: any) => state.appSettings.value)

  return (
    <>
      <div id="wrapper">
        <SideNavbar mainNavToggle={mainNavToggle} />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopNavbar children={props.navigation} />
          <div id="content">
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  )
}
