import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationLink = (props: any) => {
    const [isActive, setIsActive] = useState(false);

    const ref = useRef<any>()


    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isActive && ref.current && !ref.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isActive])

    return (
        <li ref={ref} className={props.children ? "nav-item nav-toggle " : "nav-item"}>
            <NavLink to={props.to} className={state => state.isActive ? "nav-link active" : "nav-link"} onClick={() => setIsActive(!isActive)}>
                <i className={`fas fa-fw fa-${props.icon}`}></i>
                <span>{props.text}</span>
            </NavLink>
            <div className={`collapse ${isActive && "show"}`} >
                <div className="bg-white py-2 collapse-inner rounded">
                    {props.children}
                </div>
            </div>

        </li>
    )
}
