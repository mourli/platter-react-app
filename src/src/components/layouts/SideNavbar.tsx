import { NavLink } from 'react-router-dom'
import { NavigationLink } from './NavigationLink'

export const SideNavbar = (props: any) => {

    return (
        <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${props.mainNavToggle && "toggled"}`}>
            <NavLink to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-light fa-rocket"></i>
                </div>
                {/* <div className="sidebar-brand-text mx-3">Platter App<sup>2</sup></div> */}
                <div className="sidebar-brand-text mx-3">Platter</div>
            </NavLink>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? "nav-link toggle active" : "nav-link toggle"}
                    style={{ content: "\f13a" }}>
                    <i className="fas fa-fw fa-home"></i>
                    <span>Dashboard</span>
                </NavLink>
            </li>

            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
                Interface
            </div>

            <NavigationLink to="/contacts" text="Contacts" icon="user-circle">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login.html">Login</a>
                <a className="collapse-item" href="register.html">Register</a>
                <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">404 Page</a>
                <a className="collapse-item active" href="blank.html">Blank Page</a>
            </NavigationLink>

            <NavigationLink to="/tasks" text="Tasks" icon="note-pad" />

            <hr className="sidebar-divider" />

            <NavigationLink to="/settings" text="Settings" icon="cog" />
        </ul>
    )
}
